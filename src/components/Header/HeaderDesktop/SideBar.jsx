import { StyledSideBar } from "./SideBar.styled";

import { useSelector, useDispatch } from "react-redux";
import { setSideBarStatus } from "../../../store/site";

import { BiArrowFromLeft, BiHeart } from "react-icons/bi";
import { MdOutlineVideocam } from "react-icons/md";

import SideBarList from "./SideBarList";

const SideBar = () => {
  const { sideBarStatus } = useSelector((state) => state.site);
  const dispatch = useDispatch();

  return (
    <StyledSideBar>
      <div className={`sidebar-box ${sideBarStatus ? "side-open" : ""}`}>
        <div className="list-title">
          <h1>Followed Channels</h1>
          <div
            className="title-icon"
            onClick={() => dispatch(setSideBarStatus(!sideBarStatus))}
          >
            <BiArrowFromLeft />
          </div>
          <div className="followed">
            <BiHeart />
          </div>
        </div>
        <SideBarList />

        <div className="list-title">
          <h1>Recommended Channels</h1>
          <div className="camera">
            <MdOutlineVideocam />
          </div>
        </div>
        <SideBarList />
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
