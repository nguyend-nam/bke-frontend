import { keyframes } from "styled-components";
export const theme = {
  colors: {
    green700: "#14C38E",
    green300: "#B8F1B0",
    green200: "#E3FCBF",
    greenLime: "#00FFAB",
    red700: "#FF0063",
    white: "#FFF",
    black: "#000",
    gray: "#bbb",
  },
};

export const size = {
  form: {
    width: "350px",
    width_sm: "100%",
  },
};

const screenSize = {
  xs: 481,
  sm: 641,
  md: 769,
  lg: 1025,
  xl: 1281,
  xxl: 1537,
};

export const media = {
  xs: `@media only screen and (min-width: ${screenSize.xs}px)`,
  sm: `@media only screen and (min-width: ${screenSize.md}px)`,
  md: `@media only screen and (min-width: ${screenSize.md}px)`,
  lg: `@media only screen and (min-width: ${screenSize.lg}px)`,
  xl: `@media only screen and (min-width: ${screenSize.xl}px)`,
  xxl: `@media only screen and (min-width: ${screenSize.xxl}px)`,
};

export const appear = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;
