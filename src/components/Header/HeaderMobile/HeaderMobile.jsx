import { Link } from "react-router-dom";

import { StyledHeaderMobile } from "./HeaderMobile.styled";
import { useState } from "react";
import { useLocation } from "react-router-dom";

// React İcons
import {
  BiSearch,
  BiMessageAlt,
  BiVideo,
  BiArchive,
  BiUser,
} from "react-icons/bi";

import { RiCompass3Line, RiFileCopyLine, RiHeartFill } from "react-icons/ri";

import SearchBar from "./SearchBar";
import ProfileMenu from "./ProfileMenu";

const HeaderMobile = () => {
  const { pathname } = useLocation();

  const [searchStatus, setSearchStatus] = useState(false);
  const [profileMenuStatus, setProfileMenuStatus] = useState(false);

  const handleCloseProfileMenu = () => {
    return setProfileMenuStatus(!profileMenuStatus);
  };

  return (
    <StyledHeaderMobile>
      <div className={`profile-menu-box ${profileMenuStatus ? "visible" : ""}`}>
        <ProfileMenu handleCloseProfileMenu={handleCloseProfileMenu} />
      </div>
      <header>
        <div className="profile-box">
          <BiUser onClick={() => setProfileMenuStatus(!profileMenuStatus)} />
        </div>
        <SearchBar
          searchStatus={searchStatus}
          setSearchStatus={setSearchStatus}
        />
        <div className="right-buttons">
          <BiVideo />
          <BiArchive />
          <BiMessageAlt />
          <BiSearch onClick={() => setSearchStatus(!searchStatus)} />
        </div>
      </header>
      <nav>
        <Link to="/">
          <div className={`item ${pathname === "/" ? "active" : ""}`}>
            <RiHeartFill />
            <span>Following</span>
          </div>
        </Link>
        <Link to="/discover">
          <div className={`item ${pathname === "/discover" ? "active" : ""}`}>
            <RiCompass3Line />
            <span>Discover</span>
          </div>
        </Link>

        <Link to="/browse">
          <div className={`item ${pathname === "/browse" ? "active" : ""}`}>
            <RiFileCopyLine className="item__browse" />
            <span>Browse</span>
          </div>
        </Link>
      </nav>
    </StyledHeaderMobile>
  );
};

export default HeaderMobile;
