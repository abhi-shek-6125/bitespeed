import { ChangeEvent, useState } from "react";
import { ObjectType } from "../../types";
import * as Styles from "./styles";

interface ISettingPanelProps {
  selectedNodeData: ObjectType | null;
}

const SettingPanel = ({ selectedNodeData }: ISettingPanelProps) => {
  const [text, setText] = useState(selectedNodeData?.content);

  function handleSelectedNodeContentChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    console.log(event.target.value);
  }

  return (
    <Styles.Wrapper>
      Settings Panel
      <input
        onChange={handleSelectedNodeContentChange}
        value={text}
        type="text"
      />
    </Styles.Wrapper>
  );
};

export default SettingPanel;
