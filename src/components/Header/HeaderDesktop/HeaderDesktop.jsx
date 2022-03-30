import { StyledHeaderDesktop } from "./HeaderDesktop.styled";

//React
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// React icons
import { BsTwitch, BsSuitDiamondFill } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { BiSearch, BiMessageAlt, BiArchive } from "react-icons/bi";
import { CgCrown } from "react-icons/cg";

// Components
import ProfileDesktop from "./ProfileDesktop";
import SideBar from "./SideBar";

const HeaderDesktop = ({ mySize }) => {
  const { pathname } = useLocation();

  return (
    <StyledHeaderDesktop>
      <>
        <div className="header-box">
          <header>
            <div className="left">
              <ul>
                <li>
                  <div className="item">
                    <Link to="/">
                      <div className="logo">
                        <div className="logo-bg" />
                        <BsTwitch />
                      </div>
                    </Link>
                  </div>
                </li>
                <li className={pathname.includes("following") ? "active" : ""}>
                  <Link to="/following" className="link">
                    <div className="item">Following</div>
                  </Link>
                </li>
                <li className={pathname.includes("browse") ? "active" : ""}>
                  <Link to="/browse" className="link">
                    <div className="item">Browse</div>
                  </Link>
                </li>
                <li>
                  <div className="item">
                    <FaEllipsisV className="item-icon" />
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
        <div className="left-bar">
          <SideBar mySize={mySize} />
        </div>
      </>
    </StyledHeaderDesktop>
  );
};

export default HeaderDesktop;
