import { ThemeProvider } from "styled-components";

import { lightTheme, darkTheme } from "./assets/styles/Theme";
import GlobalStyles from "./assets/styles/Global";

import { useSelector } from "react-redux";

import Home from "./views/Home";

const App = () => {
  const { darkStatus } = useSelector((state) => state.site);

  return (
    <ThemeProvider theme={darkStatus ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="app">
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
