import { IconType } from "react-icons";

export type ObjectType = {
  [key: string]: any;
};

export interface INodeTypeItem {
  nodeTypeName: NodeType;
  displayName: string;
  nodeIcon: IconType;
}

export type NodeType = "message";
