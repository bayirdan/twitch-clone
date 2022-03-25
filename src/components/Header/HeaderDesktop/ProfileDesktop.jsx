// Styled
import { StyledProfileDesktop } from "./ProfileDesktop.styled";

// React
import { useState } from "react";

// React İcons
import { FaCircle } from "react-icons/fa";
import { FiUsers, FiUserMinus, FiShield, FiTwitch } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { BiUser, BiWallet } from "react-icons/bi";
import { BsInbox, BsFileBarGraph } from "react-icons/bs";
import { MdOutlineDarkMode, MdLanguage, MdOutlineLogout } from "react-icons/md";
import { RiSettings2Line, RiArrowRightSLine } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";

// Components
import DarkAndStatus from "./DarkAndStatus";

const ProfileDesktop = () => {
  const [profileStatus, setProfileStatus] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(false);

  const changeStatus = () => {
    return setOnlineStatus(!onlineStatus);
  };

  return (
    <StyledProfileDesktop>
      <div className="profile-box">
        <div
          className="profile"
          onClick={() => setProfileStatus(!profileStatus)}
        >
          <BiUser />
        </div>
        <div
          className={`profile-menu ${profileStatus ? "show-profile-menu" : ""}`}
        >
          <div className="menu-box">
            <div className="profile-info">
              <div className="pp">
                <BiUser />
              </div>
              <div className="info">
                <div className="username">khaleesi</div>
                <div className="status">
                  <div
                    className={`status-icon ${onlineStatus ? "online" : ""}`}
                  >
                    <FaCircle />
                  </div>
                  <span>{!onlineStatus ? "Offline" : "Online"}</span>
                </div>
              </div>
            </div>

            <div className="status-button">
              <span>Online</span>
              <DarkAndStatus whichStatus="online" changeStatus={changeStatus} />
            </div>
            <hr />
            <div className="menu-list">
              <ul>
                <li>
                  <div className="item">
                    <FiUserMinus /> <span>Channel</span>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <VscSettings /> <span>Video Producer</span>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <BsFileBarGraph /> <span>Creator Dashboard</span>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <FiShield /> <span>Safety</span>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="item">
                    <FiUsers /> <span>Friends</span>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <AiOutlineStar /> <span>Subscriptions</span>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <BsInbox /> <span>Drops</span>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <BiWallet /> <span>Wallet</span>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="item">
                    <RiSettings2Line /> <span>Settings</span>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <FiTwitch style={{ transform: "rotate(180deg)" }} />{" "}
                    <span>BetterTTV Settings</span>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <MdLanguage /> <span>Language</span>
                  </div>
                  <RiArrowRightSLine />
                </li>
                <li>
                  <div className="item">
                    <MdOutlineDarkMode /> <span>Dark Theme</span>
                  </div>
                  <DarkAndStatus whichStatus="darkmode" />
                </li>
                <hr />
                <li>
                  <div className="item">
                    <MdOutlineLogout style={{ transform: "rotate(180deg)" }} />{" "}
                    <span>Log Out</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledProfileDesktop>
  );
};

export default ProfileDesktop;
