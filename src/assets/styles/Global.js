import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
}

a {
  color: ${(props) => props.theme.text};
}
`;

export default GlobalStyles;
