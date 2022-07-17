import styled from "styled-components";
import { theme } from "../../constants";

const DividerContainer = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  &:before {
    content: "";
    top: 50%;
    position: absolute;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.gray};
    z-index: -1;
  }
  & > span {
    color: ${theme.colors.gray};
    background-color: ${theme.colors.white};
    padding: 0 10px;
  }
`;

export const TextDivider = ({ children }) => {
  return <DividerContainer>{children}</DividerContainer>;
};
