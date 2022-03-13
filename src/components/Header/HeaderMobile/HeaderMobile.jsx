import { StyledHeaderMobile } from "./HeaderMobile.styled";
import { useState } from "react";

// React İcons
import {
  BiSearch,
  BiMessageAlt,
  BiVideo,
  BiArchive,
  BiUser,
  RiCompass3Line,
  RiFileCopyLine,
  RiHeartFill,
} from "react-icons/all";

import SearchBar from "./SearchBar";
import ProfileMenu from "./ProfileMenu";

const HeaderMobile = () => {
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
        <div className="item">
          <RiHeartFill />
          <span>Following</span>
        </div>
        <div className="item">
          <RiCompass3Line />
          <span>Discover</span>
        </div>
        <div className="item">
          <RiFileCopyLine className="item__browse" />
          <span>Browse</span>
        </div>
      </nav>
    </StyledHeaderMobile>
  );
};

export default HeaderMobile;
