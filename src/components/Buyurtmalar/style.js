import styled, { css } from "styled-components";

const display_flex = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  padding: 18px 40px;
`;

export const HeaderContainer = styled.div`
  display: flex;
`;

export const AddProductWrapper = styled.div`
  ${display_flex};
  height: 80px;
  width: 240px;
  background-color: #fff;
  padding: 0 20px;
  border-left: 2px solid #e5e5e5;
  border-right: 2px solid #e5e5e5;

  .title {
    font-weight: 600;
    font-size: 14px;
  }
`;

export const IconWrapper = styled.div`
  ${display_flex};
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #20d472;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 14px;
`;

export const FilterItemWrapper = styled.div`
  height: 80px;
  background-color: #fff;
  padding: 16px 24px;

  .filter-items__wrapper {
    ${display_flex};
    height: 48px;
    background-color: #edeff3;
    border-radius: 24px;
    padding: 0 5px;

    & > div {
      text-align: center;
      line-height: 36px;
    }
  }
`;

export const FilterItem = styled.div`
  width: 160px;
  height: 36px;
  background-color: ${({ isActive }) => isActive && "#fff"};
  box-shadow: ${({ isActive }) =>
    isActive ? "0px 2px 2px rgba(174, 176, 181, 0.314986)" : "none"};
  border-radius: 18px;
  cursor: pointer;
`;

export const ToggleBtnWrapper = styled.div`
  ${display_flex};
  justify-content: center;
  flex: 1;
  height: 80px;
  background-color: #fff;
  border-left: 2px solid #e5e5e5;

  .container {
    ${display_flex};
    justify-content: space-between;
    width: 100px;
    height: 48px;
    background-color: #edeff3;
    border-radius: 24px;
    padding: 6px;
  }
`;

ToggleBtnWrapper.Btn = styled.div`
  width: 36px;
  height: 36px;
  line-height: 36px;
  background-color: ${({ active }) => active && "#fff"};
  box-shadow: ${({ active }) =>
    active && "0px 2px 2px rgba(174, 176, 181, 0.314986)"};
  border-radius: 18px;
  text-align: center;
  cursor: pointer;

  .icon rect {
    fill: ${({ active }) => (active ? "#8D9BA8" : "#b6b9bd")};
  }
`;

export const CardContainer = styled.div`
  display: flex;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  margin-top: 12px;
  & > div {
    flex: 1;
    border-right: 2px solid #edeff3;
    padding: 20px 30px;
  }

  & > div:last-child {
    border-right: none;
  }

  &:hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }
`;

const ButtonStyles = css`
  ${display_flex};
  justify-content: center;
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  border: 5px solid #edeff3;
  cursor: pointer;
`;

export const CloseButtonWrapper = styled.div`
  ${ButtonStyles};
  right: -20px;
  top: 20px;
`;

export const CheckButtonWrapper = styled.div`
  ${ButtonStyles};
  right: -20px;
  bottom: 20px;
`;

CardContainer.Time = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .order-number {
    ${display_flex};

    .order-id {
      ${display_flex};
      justify-content: center;
      width: 90px;
      height: 36px;
      background-color: #20d472;
      border-radius: 18px;
      cursor: pointer;
      color: #fff;
    }

    .icon-wrapper {
      ${display_flex};
      justify-content: center;
      width: 36px;
      height: 36px;
      background-color: #edeff3;
      border-radius: 18px;
      margin-left: 16px;
      cursor: pointer;
    }
  }

  .clock-wrapper {
    ${display_flex};

    .clock {
      margin-right: 16px;
    }
  }
`;

CardContainer.User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .user-info {
    display: flex;

    .user-name {
      font-size: 18px;
      font-weight: 600;
      margin-left: 16px;
    }
  }

  .phone-info {
    display: flex;

    .phone-number {
      margin-left: 16px;
    }
  }
`;

CardContainer.Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .price-wrapper {
    ${display_flex};
    justify-content: space-between;

    .left-wrapper {
      ${display_flex};

      .icon {
        margin-right: 12px;
      }
    }

    .circle {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin-right: 8px;
      background-color: #14e5e4;
    }
  }

  .truck-wrapper {
    ${display_flex};

    .icon {
      margin-right: 12px;
    }
  }

  .title {
    font-size: 12px;
    color: #8d9ba8;
  }

  .total-value {
    letter-spacing: 0.8;
    font-weight: 600;
  }
`;

CardContainer.Location = styled.div`
  position: relative;
  .title {
    font-size: 12px;
    color: #8d9ba8;
  }

  .operator-info {
    margin-bottom: 10px;
  }

  .name,
  .filial,
  .location {
    font-size: 16px;
    font-weight: 600;
  }
`;
