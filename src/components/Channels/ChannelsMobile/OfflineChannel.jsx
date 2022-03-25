import { StyledOfflineChannel } from "./OfflineChannel.styled";

const OfflineChannel = ({ user }) => {
  return (
    <StyledOfflineChannel>
      <div className="offline-box">
        <div className="left">
          <div className="pp">
            <img src={user.pp} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="username">{user.username}</div>
          <div className="videos">
            {Math.floor(Math.random() * 10) + 1 + " new videos"}
          </div>
        </div>
      </div>
    </StyledOfflineChannel>
  );
};

export default OfflineChannel;