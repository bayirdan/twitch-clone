import { StyledFollowing } from "./ViewPage.styled";

// Mobile Components
import Channels from "../components/Channels/ChannelsMobile/Channels";
import OfflineChannels from "../components/Channels/ChannelsMobile/OfflineChannels";

const Following = () => {
  return (
    <>
      <StyledFollowing>
        <div className="follow-mobile">
          <div className="follow-box">
            <h1>Following</h1>
            <h3>Your Live Channels</h3>
            <Channels />
            <h3>Your Offline Channels</h3>
            <OfflineChannels />
          </div>
        </div>
      </StyledFollowing>
    </>
  );
};

export default Following;
