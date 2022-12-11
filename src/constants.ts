import { INodeTypeItem } from "./types";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { FiCodepen } from "react-icons/fi";

export const NODE_TYPE_LIST: Array<INodeTypeItem> = [
  {
    nodeTypeName: "message",
    displayName: "Message",
    nodeIcon: BiMessageRoundedDetail,
  },
  {
    nodeTypeName: "test1",
    displayName: "Test 1",
    nodeIcon: FiBell,
  },
  {
    nodeTypeName: "test2",
    displayName: "Test2",
    nodeIcon: FiCodepen,
  },
];
