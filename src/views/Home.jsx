import { StyledHome } from "./ViewPage.styled";

import { useSelector } from "react-redux";

import { BiChevronDown } from "react-icons/bi";
import {
  IoGameControllerOutline,
  IoMusicalNotesOutline,
  IoTrophyOutline,
  IoMicOutline,
} from "react-icons/io5";

import BigChannels from "../components/Channels/ChannelsMobile/BigChannels";
import SmallCategories from "../components/Categories/CategoriesMobile/SmallCategories";

// BURAYA KADAR GERİ AL //

// Desktop Components
import Slide from "../components/Share/Slide";
import ChannelsDesktop from "../components/Channels/ChannelsDesktop/ChannelsDesktop";
import CategoriesDesktop from "../components/Categories/CategoriesDesktop/CategoriesDekstop";
import Tags from "../components/Share/Tags";

const Home = ({ mySize }) => {
  const { sideBarStatus } = useSelector((state) => state.site);

  return (
    <>
      <StyledHome>
        <div className="home-mobile">
          <div className="home-box">
            <h1>Discover</h1>
            <div className="categories">
              <div className="category-item">
                Music <IoMusicalNotesOutline className="category-icon" />
              </div>
              <div className="category-item">
                Games <IoGameControllerOutline className="category-icon" />
              </div>
              <div className="category-item">
                Esports <IoTrophyOutline className="category-icon" />
              </div>
              <div className="category-item">
                IRL <IoMicOutline className="category-icon" />
              </div>
            </div>

            <h3 className="home-title">Live channels we think you will like</h3>
            <div className="live-channels">
              <BigChannels channel="js-youLike" />
            </div>

            <h3 className="home-title">
              <span>Categories</span> we think you will like
            </h3>
            <div className="game-categories">
              <SmallCategories />
            </div>

            <h3 className="home-title">Recommended communities</h3>
            <div className="live-channels">
              <BigChannels channel="js-smaller" />
            </div>

            <h3 className="home-title">
              Recommended <span>Dota 2</span> channels
            </h3>
            <div className="live-channels">
              <BigChannels channel="js-dota2" />
            </div>

            <h3 className="home-title">
              Recommended <span>Chees</span> channels
            </h3>
            <div className="live-channels">
              <BigChannels channel="js-chees" />
            </div>

            <h3 className="home-title">
              Recommended <span>Crypto</span> channels
            </h3>
            <div className="live-channels">
              <BigChannels channel="js-crypto" />
            </div>
          </div>
        </div>
        <div className="home-desktop">
          <div
            className={`home-box ${
              sideBarStatus && mySize > 1199 ? "side-bar-open" : ""
            }`}
          >
            <Slide />
            <ChannelsDesktop channelTitle="Live channels we think you’ll like" />
            <div className="show-more">
              <span>
                Show More
                <BiChevronDown className="down-icon" />
              </span>
            </div>

            <CategoriesDesktop />
            <div className="show-more" />
            <Tags />
            <ChannelsDesktop channelTitle="Recommended smaller communities" />
            <div className="show-more">
              <span>
                Show More
                <BiChevronDown className="down-icon" />
              </span>
            </div>
            <ChannelsDesktop channelTitle="All aboard the Hype Train!" />
            <div className="show-more">
              <span>
                Show More
                <BiChevronDown className="down-icon" />
              </span>
            </div>
            <ChannelsDesktop channelTitle="Women's History Month" />
            <div className="show-more">
              <span>
                Show More
                <BiChevronDown className="down-icon" />
              </span>
            </div>
            <ChannelsDesktop channelTitle="Recommended smaller communities" />
            <div className="show-more">
              <span>
                Show More
                <BiChevronDown className="down-icon" />
              </span>
            </div>
            <ChannelsDesktop channelTitle="All aboard the Hype Train!" />
            <div className="show-more">
              <span>
                Show More
                <BiChevronDown className="down-icon" />
              </span>
            </div>
            <ChannelsDesktop channelTitle="Women's History Month" />
          </div>
        </div>
      </StyledHome>
    </>
  );
};

export default Home;
