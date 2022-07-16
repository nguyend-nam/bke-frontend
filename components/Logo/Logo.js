import styled from "styled-components";
import { theme, media } from "../../constants";

const Title = styled.h1`
  color: ${theme.colors.green700};
  margin: 0;
  ${media.lg} {
    font-size: 40px;
  }
  font-size: 30px;
`;

export const Logo = () => {
  return <Title>BKEnglish</Title>;
};
