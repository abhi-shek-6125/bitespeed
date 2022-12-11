import { ChangeEvent, useEffect, useState } from "react";
import { ObjectType } from "../../types";
import * as Styles from "./styles";

interface ISettingPanelProps {
  selectedNodeData: ObjectType | null;
  onUpdateNodeSetting(data: string, id: string): void;
}

const SettingPanel = ({
  selectedNodeData,
  onUpdateNodeSetting,
}: ISettingPanelProps) => {
  const [text, setText] = useState("");

  // handler function to handle input field change
  function handleSelectedNodeContentChange(
    event: ChangeEvent<HTMLInputElement>
  ) {
    setText(() => event.target.value);
    if (selectedNodeData) {
      onUpdateNodeSetting(event.target.value, selectedNodeData?.id);
    }
  }

  // hook to handle various state value for input
  useEffect(() => {
    setText(selectedNodeData?.data.label);
    // similar to componentWillUnmount, to clean uo the input value at unmount
    return () => {
      setText("");
    };
  }, [selectedNodeData]);

  return (
    <Styles.Wrapper className="center">
      text:&nbsp;
      <input
        onChange={handleSelectedNodeContentChange}
        value={text}
        type="text"
      />
    </Styles.Wrapper>
  );
};

export default SettingPanel;
