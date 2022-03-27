import { StyledChannelDesktop } from "./ChannelDesktop.styled";

import { FaEllipsisV } from "react-icons/fa";

const ChannelDesktop = ({ user, imageId }) => {
  return (
    <StyledChannelDesktop>
      <div className="channel-box">
        <div className="live-screen">
          <img src={user.liveScreen} alt="" />
        </div>
        <div className="channel-info">
          <div className="left">
            <div className="pp">
              <img src={`https://i.pravatar.cc/5${imageId}`} alt="" />
            </div>
            <div className="profile-info">
              <div className="title">{user.title}</div>
              <div className="username">{user.username}</div>
              <div className="game">{user.game}</div>
              <div className="tags">
                <div className="tag">English</div>
                <div className="tag">Esports</div>
              </div>
            </div>
          </div>
          <div className="right">
            <FaEllipsisV />
          </div>
        </div>
      </div>
    </StyledChannelDesktop>
  );
};

export default ChannelDesktop;
