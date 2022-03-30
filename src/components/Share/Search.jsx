import styled from "styled-components";

import { BiSearch } from "react-icons/bi";
import { useState } from "react";

const StyledSearch = styled.div`
  display: block;
  width: 100%;

  .searchbar-box {
    width: 100%;
    background-color: ${(props) => props.theme.hover};
    color: ${(props) => props.theme.textColor};
    display: flex;
    align-items: center;
    height: 30px;
    border-radius: 5px;
    padding-left: 5px;
    border: 2px solid transparent;
    transition: 0.3s;

    .search-icon {
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .input {
      background-color: transparent;
      flex: 1;
      font-size: 13px;
      padding: 10px;
      color: ${(props) => props.theme.textColor};
    }
  }
  .searchbar-box.focus {
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.color};
  }
`;

const Search = ({ placeholder }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <StyledSearch>
      <div className={`searchbar-box ${isFocus ? "focus" : ""}`}>
        <div className="search-icon">
          <BiSearch />
        </div>
        <input
          type="text"
          placeholder={placeholder}
          className="input"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
      </div>
    </StyledSearch>
  );
};

export default Search;
