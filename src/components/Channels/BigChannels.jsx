import { useSelector } from "react-redux";
import { useEffect } from "react";

// Helper
import { mobileSlide } from "../../helper/helper";

import { StyledBigChannels } from "./BigChannel.styled";
import BigChannel from "./BigChannel";

const BigChannels = ({ channel }) => {
  const { users } = useSelector((state) => state.user);

  // For random user
  let randomUser = [...users].sort(() => 0.5 - Math.random());

  useEffect(() => {
    // Live's slide controll with mouse
    const liveSlide = document.querySelector(`#${channel}`);
    mobileSlide(liveSlide);
  });

  return (
    <StyledBigChannels>
      <div className="channels-box" id={channel}>
        <div className="channels">
          {randomUser.map((user, index) => {
            if (index < 6) {
              return <BigChannel user={user} key={index} />;
            }
          })}
        </div>
      </div>
    </StyledBigChannels>
  );
};

export default BigChannels;
