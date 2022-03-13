import { StyledSearchBar } from "./SearchBar.styled";

import { MdKeyboardArrowLeft } from "react-icons/md";

const SearcBar = ({ searchStatus, setSearchStatus }) => {
  return (
    <StyledSearchBar className={!searchStatus ? "" : "search-visible"}>
      <div className={`search-box`}>
        <div className="search-bar">
          <MdKeyboardArrowLeft
            className="search-close"
            onClick={() => setSearchStatus(!searchStatus)}
          />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </StyledSearchBar>
  );
};

export default SearcBar;
