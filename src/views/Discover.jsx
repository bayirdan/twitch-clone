import { StyledDiscover } from "./ViewPage.styled";

import {
  IoGameControllerOutline,
  IoMusicalNotesOutline,
  IoTrophyOutline,
  IoMicOutline,
} from "react-icons/io5";

import HeaderMobile from "../components/Header/HeaderMobile/HeaderMobile";
import BigChannels from "../components/Channels/BigChannels";
import SmallCategories from "../components/Categories/SmallCategories";

const Discover = () => {
  return (
    <>
      <HeaderMobile />
      <StyledDiscover>
        <div className="discover-box">
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

          <h3 className="discover-title">
            Live channels we think you will like
          </h3>
          <div className="live-channels">
            <BigChannels channel="js-youLike" />
          </div>

          <h3 className="discover-title">
            <span>Categories</span> we think you will like
          </h3>
          <div className="game-categories">
            <SmallCategories />
          </div>

          <h3 className="discover-title">Recommended communities</h3>
          <div className="live-channels">
            <BigChannels channel="js-smaller" />
          </div>

          <h3 className="discover-title">
            Recommended <span>Dota 2</span> channels
          </h3>
          <div className="live-channels">
            <BigChannels channel="js-dota2" />
          </div>

          <h3 className="discover-title">
            Recommended <span>Chees</span> channels
          </h3>
          <div className="live-channels">
            <BigChannels channel="js-chees" />
          </div>

          <h3 className="discover-title">
            Recommended <span>Crypto</span> channels
          </h3>
          <div className="live-channels">
            <BigChannels channel="js-crypto" />
          </div>
        </div>
      </StyledDiscover>
    </>
  );
};

export default Discover;
