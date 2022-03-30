import { StyledHome } from "./Home.styled";

//React icons
import {
  IoGameControllerOutline,
  IoMusicalNotesOutline,
  IoTrophyOutline,
  IoMicOutline,
} from "react-icons/io5";

// Mobile Components
import BigChannels from "../components/Channels/ChannelsMobile/BigChannels";
import SmallCategories from "../components/Categories/CategoriesMobile/SmallCategories";

// Desktop Components
import Slide from "../components/Share/Slide";
import ChannelsDesktop from "../components/Channels/ChannelsDesktop/ChannelsDesktop";
import CategoriesDesktop from "../components/Categories/CategoriesDesktop/CategoriesDekstop";
import Tags from "../components/Share/Tags";
import ShowMore from "../components/Share/ShowMore";

const Home = () => {
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
          <div className="home-box">
            <Slide />
            <ChannelsDesktop channelTitle="Live channels we think you’ll like" />
            <ShowMore title="Show more" />
            <CategoriesDesktop
              title="we think you’ll like"
              boldTitle="Categories"
            />
            <ShowMore />
            <Tags />
            <ChannelsDesktop channelTitle="Recommended smaller communities" />
            <ShowMore title="Show more" />
            <ChannelsDesktop channelTitle="All aboard the Hype Train!" />
            <ShowMore title="Show more" />
            <ChannelsDesktop channelTitle="Women's History Month" />
            <ShowMore title="Show more" />
            <ChannelsDesktop channelTitle="Recommended smaller communities" />
            <ShowMore title="Show more" />
            <ChannelsDesktop channelTitle="All aboard the Hype Train!" />
            <ShowMore title="Show more" />
            <ChannelsDesktop channelTitle="Women's History Month" />
          </div>
        </div>
      </StyledHome>
    </>
  );
};

export default Home;
