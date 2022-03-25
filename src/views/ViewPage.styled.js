import styled from "styled-components";

export const StyledHome = styled.div`
  .home-mobile {
    display: none;

    .home-box {
      padding: 55px 10px;
      color: ${(props) => props.theme.textColor};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      h3 {
        font-size: 18px;
        width: 100%;
        position: sticky;
        top: 50px;
        padding: 8px 0;
        background-color: ${(props) => props.theme.body};
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }
`;

export const StyledDiscover = styled.div`
  .discover-mobile {
    display: none;

    .discover-box {
      padding: 55px 10px;
      color: ${(props) => props.theme.textColor};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      .categories {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        margin: 30px 0;

        .category-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 15px;
          background-color: ${(props) => props.theme.color};
          color: #fff;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;

          .category-icon {
            font-size: 24px;
          }
        }
      }
      .discover-title {
        font-size: 18px;
        width: 100%;
        padding: 8px 0;
        background-color: ${(props) => props.theme.body};
        position: sticky;
        top: 50px;

        span {
          color: ${(props) => props.theme.color};
          cursor: pointer;
        }
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }
`;

export const StyledBrowse = styled.div`
  .browse-mobile {
    display: none;

    .browse-box {
      padding: 55px 10px;
      color: ${(props) => props.theme.textColor};
      position: relative;
      z-index: 3;
      animation: pageAnim 0.3s ease-in-out;

      .navigation {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 10px 0;
        font-size: 14px;
        font-weight: 500;

        & > div {
          border-bottom: 2px solid transparent;
          padding: 5px 0;
          cursor: pointer;
          user-select: none;
        }

        .nav-liveChannels {
          margin-left: 10px;
        }

        .nav-active {
          border-bottom: 2px solid ${(props) => props.theme.color};
          color: ${(props) => props.theme.color};
          transition: 0.3s;
        }
      }
    }

    @media (max-width: 767px) {
      display: block;
    }
  }
`;
