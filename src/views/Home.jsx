import { StyledHome } from "./ViewPage.styled";

import { useSelector } from "react-redux";

import { BiChevronDown } from "react-icons/bi";

// Mobile Components
import Channels from "../components/Channels/ChannelsMobile/Channels";
import OfflineChannels from "../components/Channels/ChannelsMobile/OfflineChannels";

// Desktop Components
import Slide from "../components/Share/Slide";
import ChannelsDesktop from "../components/Channels/ChannelsDesktop/ChannelsDesktop";

const Home = () => {
  const { sideBarStatus } = useSelector((state) => state.site);
  return (
    <>
      <StyledHome>
        <div className="home-mobile">
          <div className="home-box">
            <h1>Following</h1>
            <h3>Your Live Channels</h3>
            <Channels />
            <h3>Your Offline Channels</h3>
            <OfflineChannels />
          </div>
        </div>
        <div className="home-desktop">
          <div className={`home-box ${sideBarStatus ? "side-bar-open" : ""}`}>
            <Slide />
            <ChannelsDesktop channelTitle="Live channels we think you’ll like" />
            <div className="show-more">
              <span>
                Show More
                <BiChevronDown className="down-icon" />
              </span>
            </div>
          </div>
        </div>
      </StyledHome>
    </>
  );
};

export default Home;
