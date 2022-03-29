import { StyledDarkMode } from "./DarkMode.styled";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode } from "../../store/site";

const DarkMode = () => {
  const { darkStatus } = useSelector((state) => state.site);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    return dispatch(setDarkMode());
  };

  return (
    <StyledDarkMode>
      <div className="darkMode-container" onClick={handleClick}>
        <div className={`ball ${darkStatus ? "dark" : ""}`}></div>
      </div>
    </StyledDarkMode>
  );
};

export default DarkMode;
