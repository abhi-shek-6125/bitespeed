import Draggable, { DraggableEvent, DraggableData } from "react-draggable";
import { INodeTypeItem } from "../../types";
import * as Styles from "./styles";

interface INodePanelProps {
  nodeTypeList: Array<INodeTypeItem>;
}

const NodePanel = ({ nodeTypeList }: INodePanelProps) => {
  return (
    <Styles.Wrapper className="v-d-flex align-center">
      {nodeTypeList.map((item) => (
        <Draggable
          onStart={(event: DraggableEvent, data: DraggableData) => {}}
          onStop={(event: DraggableEvent, data: DraggableData) => {
            console.log(data);
          }}
          key={item.nodeTypeName}
          position={{ x: 0, y: 0 }}
        >
          <Styles.NodePanelItem className="center cursor-default">
            <item.nodeIcon />
            &nbsp;{item.displayName}
          </Styles.NodePanelItem>
        </Draggable>
      ))}
    </Styles.Wrapper>
  );
};

export default NodePanel;
