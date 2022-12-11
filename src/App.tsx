import ReactFlow, { Controls, Background, BackgroundVariant } from "reactflow";
import Header from "./components/Header";
import SettingPanel from "./components/SettingPanel";
import NodePanel from "./components/NodePanel";
import CustomMessageNode from "./components/CustomMessageNode";
import useChatbotFlow from "./helperHooks";
import * as Styles from "./appStyles";
import "./App.css";

import "reactflow/dist/style.css";
import { useMemo } from "react";
import { NODE_TYPE_LIST } from "./constants";

const App = () => {
  const {
    nodeList,
    onNodesChange,
    edgeList,
    onEdgesChange,
    selectedNode,
    onConnect,
  } = useChatbotFlow();

  const nodeTypes = useMemo(() => ({ messageNode: CustomMessageNode }), []);

  return (
    <Styles.Wrapper className="v-d-flex">
      <Header onClickSave={() => {}} />
      <div className="d-flex full-flex">
        <Styles.LeftPanel>
          <ReactFlow
            nodes={nodeList}
            edges={edgeList}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
          >
            <Background variant={BackgroundVariant.Cross} />
            <Controls />
          </ReactFlow>
        </Styles.LeftPanel>
        <Styles.RightPanel>
          {selectedNode ? (
            <SettingPanel selectedNodeData={null} />
          ) : (
            <NodePanel nodeTypeList={NODE_TYPE_LIST} />
          )}
        </Styles.RightPanel>
      </div>
    </Styles.Wrapper>
  );
};

export default App;
