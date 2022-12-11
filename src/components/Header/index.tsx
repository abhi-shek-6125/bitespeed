import React, { useEffect, useState } from "react";
import * as Styles from "./styles";

interface IHeaderProps {
  onClickSave(event: React.MouseEvent): void;
  canSave: boolean;
}

const Header = ({ onClickSave, canSave }: IHeaderProps) => {
  const [headerText, setHeaderText] = useState({ message: "", color: "" });

  useEffect(() => {
    const headerObject = canSave
      ? { message: "Saved", color: "#43c78f" }
      : { message: "Can not Save", color: "#fb8890" };
    setHeaderText(headerObject);
    setTimeout(() => {
      setHeaderText({ message: "", color: "" });
    }, 2000);
  }, [canSave]);

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
