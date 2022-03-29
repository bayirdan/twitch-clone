// Styles
import GlobalStyles from "./assets/styles/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./assets/styles/Theme";

// React
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import Header from "./components/Header/Header";

// Views
import Home from "./views/Home";
import Discover from "./views/Discover";
import Browse from "./views/Browse";
import Following from "./views/Following";

const App = () => {
  const { darkStatus } = useSelector((state) => state.site);
  const [mySize, setMySize] = useState(window.innerWidth);

  useEffect(() => {
    const changeSideBar = () => {
      return setMySize(window.innerWidth);
    };
    window.addEventListener("resize", changeSideBar);
    return () => window.removeEventListener("resize", changeSideBar);
  }, [mySize]);

  return (
    <ThemeProvider theme={darkStatus ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="app">
        <Header mySize={mySize} />
        <Routes>
          <Route path="/" element={<Home mySize={mySize} />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/following" element={<Following />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
