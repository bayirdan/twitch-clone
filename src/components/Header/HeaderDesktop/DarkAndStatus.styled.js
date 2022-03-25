import styled from "styled-components";

export const StyledDarkAndStatus = styled.div`
  .button-box {
    width: 36px;
    height: 18px;
    border: 2px solid ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.header};
    border-radius: 999px;
    position: relative;
    display: flex;
    align-items: center;

    .ball {
      position: absolute;
      left: 2px;
      background-color: ${(props) => props.theme.textColor};
      width: 12px;
      height: 12px;
      border-radius: 999px;
      transition: 0.3s cubic-bezier(0.24, 0.01, 0.77, 1.42);
    }
  }
  .button-true {
    border: 2px solid ${(props) => props.theme.color};

    .ball {
      transform: translateX(16px);
      background-color: ${(props) => props.theme.color};
    }
  }
`;
