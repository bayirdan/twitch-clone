import { StyledHome } from "./ViewPage.styled";

import Header from "../components/Header/Header";
import Channels from "../components/Channels/ChannelsMobile/Channels";
import OfflineChannels from "../components/Channels/ChannelsMobile/OfflineChannels";

const Home = () => {
  return (
    <>
      <Header />
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
      </StyledHome>
    </>
  );
};

export default Home;
