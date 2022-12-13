import { useMemo } from "react";
import ReactFlow, { Controls, Background, BackgroundVariant } from "reactflow";
import Header from "./components/Header";
import SettingPanel from "./components/SettingPanel";
import NodePanel from "./components/NodePanel";
import CustomMessageNode from "./components/CustomMessageNode";
import useChatbotFlow from "./helperHooks";
import { NODE_TYPE_LIST } from "./constants";
import * as Styles from "./appStyles";
import "./App.css";

import "reactflow/dist/style.css";

const App = () => {
  // custom hook to manage various event handlers and states at one place
  const {
    nodeList,
    onNodesChange,
    edgeList,
    onEdgesChange,
    selectedNode,
    onConnect,
    addNewNodeOnDrop,
    onNodeSelection,
    onCanvasClick,
    onUpdateSettings,
    onSaveFlow,
    onSaveMessage,
  } = useChatbotFlow();

  // object having various custom node components
  const nodeTypes = useMemo(() => ({ message: CustomMessageNode }), []);

  return (
    <Styles.Wrapper className="v-d-flex">
      <Header onClickSave={onSaveFlow} onSaveMessage={onSaveMessage} />
      <div className="d-flex full-flex">
        <Styles.LeftPanel>
          <ReactFlow
            nodes={nodeList}
            edges={edgeList}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            onNodeClick={onNodeSelection}
            onPaneClick={onCanvasClick}
            fitView
          >
            <Background variant={BackgroundVariant.Cross} />
            <Controls />
          </ReactFlow>
        </Styles.LeftPanel>
        <Styles.RightPanel id="node-panel">
          {selectedNode ? (
            <SettingPanel
              selectedNodeData={selectedNode}
              onUpdateNodeSetting={onUpdateSettings}
            />
          ) : (
            <NodePanel
              onNodeItemDrop={addNewNodeOnDrop}
              nodeTypeList={NODE_TYPE_LIST}
            />
          )}
        </Styles.RightPanel>
      </div>
    </Styles.Wrapper>
  );
};

export default App;
