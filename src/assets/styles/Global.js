import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

html {
  scroll-behavior: smooth;
}

body {
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
}

a {
  color: ${(props) => props.theme.text};
}

.app {
  display: block;
}

@media (min-width: 768px) {
  body {
    background: ${(props) => props.theme.bodyDesktop};
  }
}

@keyframes pageAnim {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default GlobalStyles;
