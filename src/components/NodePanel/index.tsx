import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { INodeTypeItem, NodeType } from "../../types";
import * as Styles from "./styles";

interface INodePanelProps {
  nodeTypeList: Array<INodeTypeItem>;
  onNodeItemDrop(data: DraggableData, nodeType: NodeType): void;
}

const NodePanel = ({ nodeTypeList, onNodeItemDrop }: INodePanelProps) => {
  return (
    <Styles.Wrapper className="v-d-flex align-center">
      {nodeTypeList.map((item) => (
        <Draggable
          onStop={(event: DraggableEvent, data: DraggableData) => {
            if (item.nodeTypeName === "message")
              onNodeItemDrop(data, item.nodeTypeName);
          }}
          key={item.nodeTypeName}
          position={{ x: 0, y: 0 }}
        >
          <Styles.NodePanelItem className="center cursor-default">
            <item.nodeIcon size="1.3em" />
            &nbsp;{item.displayName}
          </Styles.NodePanelItem>
        </Draggable>
      ))}
    </Styles.Wrapper>
  );
};

export default NodePanel;
