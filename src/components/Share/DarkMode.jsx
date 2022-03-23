import { StyledDarkMode } from "./DarkMode.styled";
import { useSelector, useDispatch } from "react-redux";
import { setDarkMode } from "../../store/site";

const DarkMode = () => {
  const { darkStatus } = useSelector((state) => state.site);
  const dispatch = useDispatch();

  return (
    <StyledDarkMode>
      <div
        className="darkMode-container"
        onClick={() => dispatch(setDarkMode())}
      >
        <div className={`ball ${darkStatus ? "dark" : ""}`}></div>
      </div>
    </StyledDarkMode>
  );
};

export default DarkMode;
