import { Handle, Position } from "reactflow";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";
import { ObjectType } from "../../types";
import * as Styles from "./styles";

interface IMessageNodeProps {
  data: ObjectType;
}

const MessageNode = ({ data }: IMessageNodeProps) => {
  return (
    <Styles.Wrapper>
      <Handle type="target" position={Position.Left} />
      <Styles.Header className="align-center space-between">
        <Styles.Title className="align-center">
          <BiMessageRoundedDetail />
          Send Message
        </Styles.Title>
        <RiWhatsappFill />
      </Styles.Header>
      <Styles.Content>{data?.label}</Styles.Content>
      <Handle type="source" position={Position.Right} />
    </Styles.Wrapper>
  );
};

export default MessageNode;
