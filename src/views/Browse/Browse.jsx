import { StyledBrowse } from "./Browse.styled";

// React
import { useSelector } from "react-redux";
import { useState } from "react";

// Mobile Components
import BigChannel from "../../components/Channels/ChannelsMobile/BigChannel";
import BigCategories from "../../components/Categories/CategoriesMobile/BigCategories";

// Desktop Components
import Tags from "../../components/Share/Tags";
import MyLink from "../../components/Share/LinkItem";
import Search from "../../components/Share/Search";

// React icons
import { BiChevronDown } from "react-icons/bi";
import { Outlet } from "react-router-dom";
import PageAllCategories from "./PageAllCategories";

const Browse = () => {
  const [categoriesButton, setCategoriesButton] = useState(true);
  const { users } = useSelector((state) => state.user);

  return (
    <>
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
                  return <BigChannel user={user} key={index} imageId={index} />;
                })}
              </div>
            )}
          </div>
        </div>
        <div className="browse-desktop">
          <div className="browse-box">
            <h1 className="page-title">Browse</h1>
            <Tags />

            <div className="nav">
              <ul>
                <li>
                  <MyLink to="/browse" title="Categories" />
                </li>
                <li>
                  <MyLink to="/browse/all" title="Live Channels" />
                </li>
              </ul>
            </div>
            <div className="search-filter">
              <div className="search-box">
                <span>Filter by</span>
                <Search placeholder="Search Tags" />
              </div>
              <div className="filter">
                <span>Sort by</span>
                <div className="sort">
                  Recommended For You
                  <div className="sort-icon">
                    <BiChevronDown />
                  </div>
                </div>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </StyledBrowse>
    </>
  );
};

export default Browse;
