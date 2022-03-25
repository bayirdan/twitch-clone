import { StyledBigChannel } from "./BigChannel.styled";

import { useLocation } from "react-router-dom";

import { FaEllipsisV } from "react-icons/fa";

const BigChannel = ({ user }) => {
  const { pathname } = useLocation();

  return (
    <StyledBigChannel>
      <div className="channel-box">
        <div
          className={`live-screen ${
            pathname === "/browse" ? "for-browse" : ""
          }`}
        >
          <img src={user.liveScreen} alt="" />
          <span className="live">Live</span>
          <span className="viewers">{user.viewers} Viewers</span>
        </div>
        <div className="live-info">
          <div className="pp">
            <img src={user.pp} alt="" />
          </div>
          <div className="titles">
            <div className="username-box">
              <div className="username">{user.username}</div>
              <FaEllipsisV className="others" />
            </div>
            <div className="title">{user.title}</div>
            <div className="game">{user.game}</div>
            <div className="tag">{user.tag}</div>
          </div>
        </div>
      </div>
    </StyledBigChannel>
  );
};

export default BigChannel;
