import styled from "styled-components";

// Page HOME
export const StyledHome = styled.div`
  /* Home Mobile */
  .home-mobile {
    display: none;

    .home-box {
      padding: 55px 10px;
      background-color: ${(props) => props.theme.header};
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
      .home-title {
        font-size: 18px;
        width: 100%;
        padding: 8px 0;
        background-color: ${(props) => props.theme.header};
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

  /* Home Desktop */
  .home-desktop {
    display: none;

    .home-box {
      display: block;
    }

    @media (min-width: 768px) {
      display: block;
    }
  }
`;
