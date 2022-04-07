// Styles
import GlobalStyles from "./assets/styles/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./assets/styles/Theme";

// React
import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import Header from "./components/Header/Header";

// Views
import Home from "./views/Home";
import Browse from "./views/Browse/Browse";
import Following from "./views/Following/Following";
import PageAllCategories from "./views/Browse/PageAllCategories";
import PageAllLive from "./views/Browse/PageAllLive";
import PageOverview from "./views/Following/PageOverview";
import PageLive from "./views/Following/PageLive";
import PageVideos from "./views/Following/PageVideos";
import PageCategories from "./views/Following/PageCategories";

const App = () => {
  const { darkStatus, sideBarStatus } = useSelector((state) => state.site);
  const [mySize, setMySize] = useState(window.innerWidth);
  let navigate = useNavigate();

  useEffect(() => {
    if (mySize < 768) {
      navigate("/");
    }
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
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Home />} />
            <Route path="/following/" element={<Following />}>
              <Route index element={<PageOverview />} />
              <Route path="live" element={<PageLive />} />
              <Route path="videos" element={<PageVideos />} />
              <Route path="categories" element={<PageCategories />} />
            </Route>
            <Route path="/browse/" element={<Browse />}>
              <Route index element={<PageAllCategories />} />
              <Route path="all" element={<PageAllLive />} />
            </Route>
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
