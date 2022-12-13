import React, { useEffect, useState } from "react";
import * as Styles from "./styles";

interface IHeaderProps {
  onClickSave(event: React.MouseEvent): void;
  onSaveMessage: { text: string; isError: boolean };
}

const Header = ({ onClickSave, onSaveMessage }: IHeaderProps) => {
  const [headerText, setHeaderText] = useState({ message: "", color: "" });

  useEffect(() => {
    const headerObject = onSaveMessage.text
      ? {
          message: onSaveMessage.text,
          color: onSaveMessage.isError ? "#fb8890" : "#43c78f",
        }
      : { message: "", color: "" };
    setHeaderText(headerObject);
    setTimeout(() => {
      setHeaderText({ message: "", color: "" });
    }, 2000);
  }, [onSaveMessage]);

  return (
    <Styles.Wrapper className="row-reverse">
      <button
        type="button"
        onClick={(event) => {
          onClickSave(event);
        }}
      >
        Save Changes
      </button>
      <p
        style={{
          backgroundColor: headerText.color || "inherit",
          padding: "8px",
        }}
        className="full-flex center"
      >
        {headerText.message}
      </p>
    </Styles.Wrapper>
  );
};

export default Header;
