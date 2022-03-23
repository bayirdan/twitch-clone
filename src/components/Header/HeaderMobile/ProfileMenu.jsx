// React icons
import { AiOutlineStar, AiOutlineRight, AiOutlineEye } from "react-icons/ai";
import { BiUser, BiUserVoice } from "react-icons/bi";
import { BsBroadcast, BsInbox } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import { RiSettings2Line } from "react-icons/ri";

// Styled
import { StyledProfileMenu } from "./ProfileMenu.styled";

// Components
import DarkMode from "../../Share/DarkMode";

const ProfileMenu = ({ handleCloseProfileMenu }) => {
  return (
    <StyledProfileMenu>
      <div className="profile-menu-container">
        <div className="title">
          <h1>Account</h1>
          <span onClick={handleCloseProfileMenu}>Done</span>
        </div>
        <div className="user">
          <div className="user__top">
            <div className="user-box">
              <BiUser />
            </div>
            <button>
              <BsBroadcast className="cast-icon" /> Go Live
            </button>
          </div>
          <div className="user__bottom">
            <div className="username">khaleesi</div>
            <div className="status">Online</div>
          </div>
        </div>
        <div className="settings">
          <ul>
            <li>
              <div className="settings__title">
                <div className="title-left">
                  <AiOutlineStar className="title-icon" />
                  Subscriptions
                </div>
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div className="settings__title">
                <div className="title-left">
                  <BsInbox className="title-icon" />
                  Drops
                </div>
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div className="settings__title">
                <div className="title-left">
                  <FiUsers className="title-icon" />
                  Friends
                </div>
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div className="settings__title">
                <div className="title-left">
                  <RiSettings2Line className="title-icon" />
                  Settings
                </div>
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div className="settings__title">
                <div className="title-left">
                  <AiOutlineEye className="title-icon" />
                  Set Presence
                </div>
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div className="settings__title">
                <div className="title-left">
                  <BiUserVoice className="title-icon" />
                  My Channel
                </div>
                <AiOutlineRight />
              </div>
            </li>
            <li>
              <div className="settings__title">
                <div className="title-left">
                  <MdOutlineDarkMode className="title-icon" />
                  Dark Mode
                </div>
                <DarkMode />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </StyledProfileMenu>
  );
};

export default ProfileMenu;
