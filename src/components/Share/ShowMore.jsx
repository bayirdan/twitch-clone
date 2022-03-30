import styled from "styled-components";

import { BiChevronDown } from "react-icons/bi";

// Style
const StyledShowMore = styled.div`
  .show-more {
    display: flex;
    align-items: center;
    margin: 30px 0;

    span {
      font-size: 13px;
      font-weight: 600;
      padding: 5px 15px;
      margin: 0 10px;
      background-color: ${(props) => props.theme.bodyDesktop};
      color: ${(props) => props.theme.color};
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 5px;

      .down-icon {
        font-size: 20px;
      }

      &:hover {
        background-color: ${(props) => props.theme.hover};
      }
    }
  }

  .show-more::before,
  .show-more::after {
    content: "";
    height: 1px;
    flex: 1;
    background-color: ${(props) => props.theme.hover};
  }
`;

const ShowMore = ({ title }) => {
  return (
    <StyledShowMore>
      <div className="show-more">
        {title && (
          <span>
            {title}
            <BiChevronDown className="down-icon" />
          </span>
        )}
      </div>
    </StyledShowMore>
  );
};

export default ShowMore;
