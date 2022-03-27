import { StyledChannelsDesktop } from "./ChannelDesktop.styled";

import { useSelector } from "react-redux";

import ChannelDesktop from "./ChannelDesktop";

const ChannelsDesktop = ({ channelTitle }) => {
  const { users } = useSelector((state) => state.user);
  let randomUsers = [...users].sort(() => 0.5 - Math.random());

  return (
    <StyledChannelsDesktop>
      <div className="channels-box">
        {channelTitle && <h1>{channelTitle}</h1>}
        <div className="list">
          {users.map((user, index) => {
            if (index < 6)
              return <ChannelDesktop user={user} key={index} imageId={index} />;
          })}
        </div>
      </div>
    </StyledChannelsDesktop>
  );
};

export default ChannelsDesktop;
