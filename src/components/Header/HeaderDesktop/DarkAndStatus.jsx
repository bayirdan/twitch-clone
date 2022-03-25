import { StyledDarkAndStatus } from "./DarkAndStatus.styled";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../../../store/site";

const DarkAndStatus = ({ whichStatus, changeStatus }) => {
  const [ballState, setBallState] = useState(false);
  const dispatch = useDispatch();

  const handleButton = () => {
    if (!whichStatus) return;
    setBallState(!ballState);
    whichStatus === "online" ? changeStatus() : dispatch(setDarkMode());
    return;
  };

  return (
    <StyledDarkAndStatus>
      <div
        className={`button-box ${ballState ? "button-true" : ""}`}
        onClick={handleButton}
      >
        <div className="ball" />
      </div>
    </StyledDarkAndStatus>
  );
};

export default DarkAndStatus;
