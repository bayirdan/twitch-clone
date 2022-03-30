import { StyledFollowing } from "../Following/Following.styled";

import { useLocation, Outlet } from "react-router-dom";

// Mobile Components
import Channels from "../../components/Channels/ChannelsMobile/Channels";
import OfflineChannels from "../../components/Channels/ChannelsMobile/OfflineChannels";

// Components
import MyLink from "../../components/Share/LinkItem";

const Following = () => {
  const { pathname } = useLocation();
  console.log(pathname);
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
        <div className="follow-desktop">
          <div className="follow-box">
            <h1 className="page-title">Following</h1>

            <div className="nav">
              <ul>
                <li>
                  <MyLink to="/following" title="Overview" />
                </li>
                <li>
                  <MyLink to="/following/live" title="Live" />
                </li>
                <li>
                  <MyLink to="/following/videos" title="Videos" />
                </li>
                <li>
                  <MyLink to="/following/categories" title="Categories" />
                </li>
              </ul>
            </div>
            <div className="page">
              <Outlet />
            </div>
          </div>
        </div>
      </StyledFollowing>
    </>
  );
};

export default Following;
