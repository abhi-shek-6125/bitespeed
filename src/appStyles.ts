import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const LeftPanel = styled.div`
  width: 70%;
  height: 100%;
  .react-flow__node.selected {
    border: 1px solid red !important;
    box-shadow: none;
    border-radius: 4px;
  }
`;

export const RightPanel = styled.div`
  width: 30%;
  border-left: 1px solid black;
`;
