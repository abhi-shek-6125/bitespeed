import ReactFlow, {
  Controls,
  Background,
  Node,
  Edge,
  BackgroundVariant,
} from "reactflow";
import { useState } from "react";
import Header from "./components/Header";
import SettingPanel from "./components/SettingPanel";
import NodePanel from "./components/NodePanel";
import * as Styles from "./appStyles";
import "./App.css";

import "reactflow/dist/style.css";

const App = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodeList, setNodeList] = useState<Array<Node>>([]);
  const [edgeList, setEdgeList] = useState<Array<Edge>>([]);

  return (
    <Styles.Wrapper className="v-d-flex">
      <Header onClickSave={() => {}} />
      <div className="d-flex full-flex">
        <Styles.LeftPanel>
          <ReactFlow nodes={nodeList} edges={edgeList} fitView>
            <Background variant={BackgroundVariant.Cross} />
            <Controls />
          </ReactFlow>
        </Styles.LeftPanel>
        <Styles.RightPanel>
          {selectedNode ? (
            <SettingPanel selectedNodeData={null} />
          ) : (
            <NodePanel />
          )}
        </Styles.RightPanel>
      </div>
    </Styles.Wrapper>
  );
};

export default App;
