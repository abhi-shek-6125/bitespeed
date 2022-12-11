import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 4px;
  background-color: white;
  max-width: 250px;
  &.selected-node {
    border: 1px solid blue;
  }
`;

export const Header = styled.div`
  background-color: #97dece;
  border-radius: 4px 4px 0 0;
`;

export const Content = styled.div`
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
  background-color: white;
  padding: 4px;
  box-shadow: 5px 5px 5px gray;
  border-radius: 0 0 5px 4px;
`;

export const Title = styled.div`
  margin-right: 24px;
  font-size: 14px;
  line-height: 17px;
  padding: 4px 8px;
`;
