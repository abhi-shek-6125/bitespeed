import { useCallback, useState } from "react";
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

function useChatbotFlow() {
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodeList, setNodeList] = useState<Array<Node>>([]);
  const [edgeList, setEdgeList] = useState<Array<Edge>>([]);

  const onNodesChange = useCallback((changes: Array<NodeChange>) => {
    console.log(changes);
    return setNodeList((nds) => applyNodeChanges(changes, nds));
  }, []);

  const onEdgesChange = useCallback(
    (changes: Array<EdgeChange>) =>
      setEdgeList((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (connection: Connection) => setEdgeList((eds) => addEdge(connection, eds)),
    [setEdgeList]
  );

  return {
    selectedNode,
    setSelectedNode,
    nodeList,
    onNodesChange,
    edgeList,
    onEdgesChange,
    onConnect,
  };
}

export default useChatbotFlow;
