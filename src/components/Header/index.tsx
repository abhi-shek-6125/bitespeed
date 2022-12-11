import * as Styles from "./styles";

interface IHeaderProps {
  onClickSave(): void;
}

const Header = ({ onClickSave }: IHeaderProps) => {
  return <Styles.Wrapper>Header</Styles.Wrapper>;
};

export default Header;
