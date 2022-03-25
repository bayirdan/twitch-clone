import styled from "styled-components";

export const StyledBigCategory = styled.div`
  .big-category-box {
    color: ${(props) => props.theme.textColor};
    display: flex;
    align-items: center;
    margin: 10px 0;
    animation: pageAnim 0.3s ease-in-out;

    .game-image {
      width: 80px;
      cursor: pointer;
    }
    .game-info {
      padding: 0 10px;

      .name {
        font-weight: 600;
        padding: 5px 0;
        cursor: pointer;
      }
      .viewers {
        padding: 5px 0;
        font-size: 15px;
      }
      .tags {
        display: block;

        ul {
          display: flex;
          gap: 5px;
          padding: 5px 0;

          li {
            background-color: ${(props) => props.theme.border};
            padding: 5px 10px;
            border-radius: 50px;
            font-size: 14px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
