// Styles
import GlobalStyles from "./assets/styles/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./assets/styles/Theme";

// React
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import Header from "./components/Header/Header";

// Views
import Home from "./views/Home";
import Browse from "./views/Browse/Browse";
import Following from "./views/Following/Following";
import PageVideos from "./views/Following/PageVideos";
import PageOverview from "./views/Following/PageOverview";
import PageCategories from "./views/Following/PageCategories";
import PageLive from "./views/Following/PageLive";
import PageAllCategories from "./views/Browse/PageAllCategories";
import PageAllLive from "./views/Browse/PageAllLive";

const App = () => {
  const { darkStatus, sideBarStatus } = useSelector((state) => state.site);
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
        <div
          className={`main ${
            sideBarStatus && mySize > 1199 ? "sidebar-open" : ""
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="following" element={<Following />}>
              <Route index element={<PageOverview />} />
              <Route path="live" element={<PageLive />} />
              <Route path="videos" element={<PageVideos />} />
              <Route path="categories" element={<PageCategories />} />
            </Route>
            <Route path="browse" element={<Browse />}>
              <Route index element={<PageAllCategories />} />
              <Route path="all" element={<PageAllLive />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
