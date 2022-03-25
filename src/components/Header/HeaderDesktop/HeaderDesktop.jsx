import { StyledHeaderDesktop } from "./HeaderDesktop.styled";

import { BsTwitch, BsSuitDiamondFill } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { BiSearch, BiMessageAlt, BiArchive } from "react-icons/bi";
import { CgCrown } from "react-icons/cg";
import { ImDiamonds } from "react-icons/im";

import ProfileDesktop from "./ProfileDesktop";

const HeaderDesktop = () => {
  return (
    <StyledHeaderDesktop>
      <>
        <div className="header-box">
          <header>
            <div className="left">
              <ul>
                <li>
                  <div className="item">
                    <div className="logo">
                      <div className="logo-bg"></div>
                      <BsTwitch />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="item item-border">Following</div>
                </li>
                <li>
                  <div className="item item-border">Browse</div>
                </li>
                <li>
                  <div className="item">
                    <FaEllipsisV />
                  </div>
                </li>
              </ul>
            </div>
            <div className="bottom">
              <div className="search-bar">
                <input type="text" placeholder="Search" />
                <div className="search-icon">
                  <BiSearch />
                </div>
              </div>
            </div>
            <div className="right">
              <div className="right-icons">
                <ul>
                  <li>
                    <CgCrown />
                  </li>
                  <li>
                    <BiArchive />
                  </li>
                  <li>
                    <BiMessageAlt />
                  </li>
                  <li className="bits">
                    <BsSuitDiamondFill />
                    <span>Get Bits</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="profile-desktop">
              <ProfileDesktop />
            </div>
          </header>
        </div>
      </>
    </StyledHeaderDesktop>
  );
};

export default HeaderDesktop;
