import { StyledSideBarListItem } from "./SideBarList.styled";

import { FaCircle } from "react-icons/fa";

const SideBarListItem = ({ user, imageId }) => {
  return (
    <StyledSideBarListItem>
      <li>
        <div className="item">
          <div className="pp">
            <img src={`https://i.pravatar.cc/5${imageId}`} />
          </div>
          <div className="hover-section">
            <div className="info">
              <div className="username">{user.username}</div>
              <div className="title">{user.game}</div>
            </div>
            <div className="live">
              <div className="live-icon">
                <FaCircle />
              </div>
              <span>333</span>
            </div>
          </div>
        </div>
      </li>
    </StyledSideBarListItem>
  );
};

export default SideBarListItem;
