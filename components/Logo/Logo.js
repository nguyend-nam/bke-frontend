import styled from "styled-components";
import { theme, media } from "../../constants";
import Image from "next/image";

const Title = styled.h1`
  color: ${theme.colors.green700};
  margin: 0;
  ${media.lg} {
    font-size: 40px;
  }
  font-size: 30px;
  margin-left: 5px;
`;

export const Logo = () => {
  return (
    <>
      <Image src="/./image/icons.jpg" alt="logo" width="35px" height="35px" />
      <Title>BKEnglish</Title>
    </>
  );
};
