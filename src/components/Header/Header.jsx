import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import HeaderMobile from "./HeaderMobile/HeaderMobile";

const Header = ({ mySize }) => {
  return (
    <div className="header">
      <HeaderMobile />
      <HeaderDesktop mySize={mySize} />
    </div>
  );
};

export default Header;
