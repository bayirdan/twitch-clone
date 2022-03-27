import styled from "styled-components";

export const StyledChannelDesktop = styled.div`
  .channel-box {
    margin-top: 10px;
    flex: 1;

    .live-screen {
      cursor: pointer;
      transition: 0.2s;

      img {
        transition: 0.2s;
      }

      &:hover {
        background-color: ${(props) => props.theme.color};

        img {
          transform: translate(6px, -3px);
        }
      }
    }

    .channel-info {
      display: flex;
      justify-content: space-between;
      padding: 5px;

      .left {
        display: flex;

        .pp {
          display: block;

          img {
            width: 40px;
            height: 40px;
            border-radius: 999px;
            cursor: pointer;
          }
        }

        .profile-info {
          padding: 0 10px;
          font-size: 14px;
          color: ${(props) => props.theme.textColor};

          .title {
            font-weight: 500;
          }
          .username {
            padding: 5px 0;
          }

          .username,
          .game {
            cursor: pointer;
            color: ${(props) => props.theme.soft};
          }

          .tags {
            display: flex;
            gap: 5px;
            align-items: center;
            margin-top: 5px;

            .tag {
              padding: 4px 8px;
              background-color: ${(props) => props.theme.hover};
              border-radius: 10px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;

export const StyledChannelsDesktop = styled.div`
  .channels-box {
    display: block;
    margin-top: 50px;
    color: ${(props) => props.theme.textColor};

    h1 {
      font-size: 18px;
      font-weight: 500;
      padding: 5px 0;
    }

    .list {
      display: flex;
      gap: 10px;
    }
  }
`;
