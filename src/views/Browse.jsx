import { StyledBrowse } from "./ViewPage.styled";

import { useSelector } from "react-redux";
import { useState } from "react";

import HeaderMobile from "../components/Header/HeaderMobile/HeaderMobile";
import BigChannel from "../components/Channels/ChannelsMobile/BigChannel";
import BigCategories from "../components/Categories/CategoriesMobile/BigCategories";

const Browse = () => {
  const [categoriesButton, setCategoriesButton] = useState(true);
  const { users } = useSelector((state) => state.user);

  return (
    <>
      <HeaderMobile />
      <StyledBrowse>
        <div className="browse-mobile">
          <div className="browse-box">
            <h1>Browse</h1>
            <div className="navigation">
              <div
                onClick={() => setCategoriesButton(true)}
                className={`nav-categories ${
                  categoriesButton ? "nav-active" : ""
                }`}
              >
                Categories
              </div>
              <div
                onClick={() => setCategoriesButton(false)}
                className={`nav-liveChannels ${
                  !categoriesButton ? "nav-active" : ""
                }`}
              >
                Live Channels
              </div>
            </div>
            {categoriesButton ? (
              <div className="categories">
                <BigCategories />
              </div>
            ) : (
              <div className="live-channels">
                {users.map((user, index) => {
                  return <BigChannel user={user} key={index} />;
                })}
              </div>
            )}
          </div>
        </div>
      </StyledBrowse>
    </>
  );
};

export default Browse;
