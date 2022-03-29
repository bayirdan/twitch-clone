import { useSelector } from "react-redux";
import { useEffect } from "react";

// Helper
import { mobileSlide } from "../../../helper/helper";

import { StyledBigChannels } from "./BigChannel.styled";
import BigChannel from "./BigChannel";

const BigChannels = ({ channel }) => {
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    // Live's slide controll with mouse
    const liveSlide = document.querySelector(`#${channel}`);
    mobileSlide(liveSlide);
  });

  return (
    <StyledBigChannels>
      <div className="channels-box" id={channel}>
        <div className="channels">
          {users.map((user, index) => {
            if (index < 6) {
              return <BigChannel user={user} key={index} imageId={index} />;
            }
          })}
        </div>
      </div>
    </StyledBigChannels>
  );
};

export default BigChannels;
