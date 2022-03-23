import styled from "styled-components";

export const StyledHeaderMobile = styled.header`
  display: none;

  // Header Navbar
  header {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme.header};
    color: ${(props) => props.theme.iconColor};
    padding: 0 20px;
    position: fixed;
    top: 0;
    z-index: 4;

    .profile-box {
      width: 30px;
      height: 30px;
      background-color: deeppink;
      border-radius: 999px;
      display: flex;
      align-items: flex-end;
      padding-bottom: 3px;
      justify-content: center;
      font-size: 24px;
      overflow: hidden;
      color: #fff;
      cursor: pointer;
    }

    .right-buttons {
      display: flex;
      justify-content: space-between;
      max-width: 160px;
      flex: 1;
      font-size: 24px;

      & > * {
        cursor: pointer;

        &:hover {
          opacity: 0.75;
        }
      }
    }
  }

  // Bottom Navbar
  nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 60px;
    background-color: ${(props) => props.theme.header};
    z-index: 4;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 26px;
      color: ${(props) => props.theme.iconColor};
      cursor: pointer;
      transition: 0.3s;

      span {
        font-size: 12px;
        margin-top: 5px;
      }

      .item__browse {
        transform: rotateY(180deg);
      }
    }

    .active {
      color: ${(props) => props.theme.color};
    }
  }

  // Profile Menu
  .profile-menu-box {
    display: none;

    &.visible {
      display: block;
    }
  }

  @media (max-width: 767px) {
    display: block;
  }
`;
