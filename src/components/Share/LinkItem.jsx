import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Style
import styled from "styled-components";

const StyledMyLink = styled.div`
  width: 100%;
  height: 100%;

  .link-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid transparent;

    .link {
      color: ${(props) => props.theme.textColor};
      transition: 0.3s;
    }

    &:hover {
      .link {
        color: ${(props) => props.theme.color};
      }
    }
  }

  .link-box.active {
    border-bottom: 2px solid ${(props) => props.theme.color};

    a {
      color: ${(props) => props.theme.color};
    }
  }
`;

const MyLink = ({ title, to }) => {
  const { pathname } = useLocation();
  return (
    <StyledMyLink>
      <div className={`link-box ${pathname == to ? "active" : ""}`}>
        <Link to={to ? to : "/"} className="link">
          {title ? title : "default"}
        </Link>
      </div>
    </StyledMyLink>
  );
};

export default MyLink;
