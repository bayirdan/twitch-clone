import { StyledSideBarList } from "./SideBarList.styled";

import SideBarListItem from "./SideBarListItem";

import { useSelector } from "react-redux";

const SideBarList = () => {
  const { users } = useSelector((state) => state.user);

  return (
    <StyledSideBarList>
      <div className="list">
        <ul>
          {users.map((user, index) => {
            if (index > 4) return;
            return <SideBarListItem user={user} key={index} imageId={index} />;
          })}
        </ul>
        <div className="show-more">
          <span>Show More</span>
        </div>
      </div>
    </StyledSideBarList>
  );
};

export default SideBarList;
