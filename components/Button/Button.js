import styled from "styled-components";
import { theme } from "../../constants";

const ButtonContainer = styled.button`
  cursor: pointer;
  width: 100%;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  background-color: ${theme.colors.green700};
  transition: 0.2s ease-in-out;
  & > * {
    font-size: 18px !important;
    color: ${theme.colors.white};
  }
  & > span {
    font-size: 16px;
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 12px ${theme.colors.greenLime}88;
  }
`;

export const Button = (props) => {
  const { children, onClick } = props;
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};
