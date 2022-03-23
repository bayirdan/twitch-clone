import GlobalStyles from "./assets/styles/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./assets/styles/Theme";

import { Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";

import Home from "./views/Home";
import Discover from "./views/Discover";
import Browse from "./views/Browse";

const App = () => {
  const { darkStatus } = useSelector((state) => state.site);

  return (
    <ThemeProvider theme={darkStatus ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
