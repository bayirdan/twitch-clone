import styled from "styled-components";

export const StyledSlide = styled.div`
  display: block;

  .slide {
    display: block;
    padding: 50px 0;
    position: relative;

    .three {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 50px;
      z-index: 3;

      img {
        width: 400px;
        height: 240px;
        cursor: pointer;
        transition: 0.3s;
        filter: blur(1px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);

        &:hover {
          transform: scale(1.03);
        }
      }

      .two {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 100px;
        z-index: 5;

        img {
          width: 450px;
          height: 270px;
        }

        .one {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 7;
          box-shadow: 0 5px 30px rgba(0, 0, 0, 0.5);

          img {
            width: 500px;
            height: 300px;
            transition: 0.3s;
            box-shadow: none;
            filter: none;

            &:hover {
              transform: none;
            }
          }

          .screen-icons {
            position: absolute;
            bottom: 5px;
            width: 100%;
            padding: 0 10px;
            color: #fff;
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .icon-screen {
              margin: 0 5px;
              cursor: pointer;
            }
          }

          .screen-live {
            position: absolute;
            top: 10px;
            left: 10px;

            span {
              background-color: red;
              color: #fff;
              padding: 3px 5px;
              text-transform: uppercase;
              border-radius: 5px;
              font-size: 14px;
            }
          }

          .info {
            width: 200px;
            height: 300px;
            background-color: ${(props) => props.theme.headerDesktop};

            .info-top {
              width: 100%;
              padding: 10px;

              .profile {
                display: flex;

                .pp {
                  img {
                    width: 40px;
                    height: 40px;
                    border-radius: 999px;
                    cursor: pointer;
                  }
                }

                .profile-info {
                  display: block;
                  padding: 0 10px;
                  font-size: 14px;
                  color: ${(props) => props.theme.color};

                  .username {
                    font-weight: 600;
                    cursor: pointer;
                  }
                  .game {
                    cursor: pointer;
                    padding: 3px 0;
                  }
                  .viewers {
                    font-size: 13px;
                    color: ${(props) => props.theme.textColor};
                  }
                }
              }

              .tags {
                margin-top: 10px;
                display: flex;
                font-size: 13px;
                gap: 5px;

                .tag {
                  padding: 4px 8px;
                  background-color: ${(props) => props.theme.hover};
                  border-radius: 10px;
                  font-weight: 500;
                  color: ${(props) => props.theme.softDesktop};
                  cursor: pointer;
                }
              }
            }

            .info-bottom {
              padding: 10px;
              font-size: 13px;
              line-height: 1.7;
              color: ${(props) => props.theme.textColor};
            }
          }
        }
      }
    }

    /* Slide Arrows */
    .arrow {
      position: absolute;
      top: 150px;
      font-size: 22px;
      cursor: pointer;
      padding: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      border-radius: 5px;
      color: ${(props) => props.theme.textColor};
      z-index: 6;

      &:hover {
        background-color: ${(props) => props.theme.hover};
      }
    }

    .arrow-left {
      left: 20px;
    }

    .arrow-right {
      right: 20px;
    }
    /* Slide Arrows */
  }
`;
