import React, { useCallback, useState } from "react";
import {
  Node,
  Edge,
  applyEdgeChanges,
  applyNodeChanges,
  NodeChange,
  EdgeChange,
  Connection,
  addEdge,
} from "reactflow";
import { DraggableData } from "react-draggable";
import { v4 as uuidv4 } from "uuid";
import { NodeType } from "./types";

function useChatbotFlow() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [nodeList, setNodeList] = useState<Array<Node>>([]);
  const [edgeList, setEdgeList] = useState<Array<Edge>>([]);
  const [onSaveMessage, setOnSaveMessage] = useState({
    text: "",
    isError: false,
  });

  const addNewNodeOnDrop = (data: DraggableData, nodeType: NodeType) => {
    const nodeId = uuidv4();
    const newNodeData = {
      id: nodeId,
      type: nodeType,
      data: { label: "" },
      position: { x: data.x, y: data.y },
    };
    setNodeList((nds) => [...nds, newNodeData]);
  };

  const onNodesChange = useCallback((changes: Array<NodeChange>) => {
    return setNodeList((nds) => applyNodeChanges(changes, nds));
  }, []);

  const onEdgesChange = useCallback(
    (changes: Array<EdgeChange>) =>
      setEdgeList((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (connection: Connection) => {
      return setEdgeList((eds) => {
        // checking if the source is already a source in existing edges
        const isAlreadySource =
          eds.filter((item) => {
            if (item.source === connection.source) {
              return true;
            }
            return false;
          }).length === 1;
        if (isAlreadySource) {
          return eds;
        }
        return addEdge(connection, eds);
      });
    },
    [setEdgeList]
  );

  const onNodeSelection = (event: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  };

  const onCanvasClick = (event: React.MouseEvent) => {
    setSelectedNode(null);
  };

  const onUpdateSettings = (text: string, nodeId: string) => {
    const updatedList = nodeList.map((nodeItem) => {
      if (nodeItem.id === nodeId) {
        return {
          ...nodeItem,
          data: { label: text },
        };
      }
      return nodeItem;
    });
    setNodeList(updatedList);
  };

  const onSaveFlow = () => {
    if (nodeList.length > 0 && edgeList.length === 0) {
      setOnSaveMessage({ text: "Can not save", isError: true });
      return;
    }
    let canSave = true;
    nodeList.forEach((item) => {
      let hasEmptyTargetHandle = true;
      edgeList.forEach((edge) => {
        if (edge.target === item.id) {
          hasEmptyTargetHandle = false;
        }
      });
      if (hasEmptyTargetHandle) {
        canSave = false;
      }
    });

    if (canSave) {
      setOnSaveMessage({ text: "Saved", isError: false });
    } else {
      setOnSaveMessage({ text: "Can not save", isError: true });
    }
  };

  return {
    selectedNode,
    setSelectedNode,
    nodeList,
    onNodesChange,
    edgeList,
    onEdgesChange,
    onConnect,
    addNewNodeOnDrop,
    onNodeSelection,
    onCanvasClick,
    onUpdateSettings,
    onSaveFlow,
    onSaveMessage,
  };
}

export default useChatbotFlow;
