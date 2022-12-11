import { useCallback } from "react";
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
      <Styles.Header>
        <div>
          <BiMessageRoundedDetail />
          Send Message
        </div>
        <RiWhatsappFill />
      </Styles.Header>
      <Styles.Content>{data?.content}</Styles.Content>
      <Handle type="source" position={Position.Right} />
    </Styles.Wrapper>
  );
};

export default MessageNode;
