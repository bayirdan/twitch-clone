import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import HeaderMobile from "./HeaderMobile/HeaderMobile";

const Header = () => {
  return (
    <div className="header">
      <HeaderMobile />
      <HeaderDesktop />
    </div>
  );
};

export default Header;
