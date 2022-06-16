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
`;

FilterItemWrapper.Container = styled.div`
  ${display_flex};
  height: 48px;
  background-color: #edeff3;
  border-radius: 24px;
  padding: 0 5px;
  opacity: ${({ active }) => (active ? "1" : "0.2")};

  & > div {
    text-align: center;
    line-height: 36px;
  }
`;

export const FilterItem = styled.div`
  width: 160px;
  height: 36px;
  background-color: ${({ isActive }) => isActive && "#fff"};
  box-shadow: ${({ isActive }) =>
    isActive ? "0px 2px 2px rgba(174, 176, 181, 0.314986)" : "none"};
  border-radius: 18px;
  pointer-events: ${({ active }) => (active ? "auto" : "none")};
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

/* Column cards styles */
export const CardContainerV = styled.div`
  display: flex;
`;

export const TitleContainer = styled.div`
  display: flex;
  padding: 32px 0 8px;

  & > div {
    ${display_flex};
    flex: 1;
    opacity: 0.7;
    font-size: 14px;
    text-align: center;
  }

  .items_length {
    display: inline-block;
    width: 30px;
    height: 20px;
    background: #fff;
    border-radius: 4px;
    margin-left: 12px;
  }
`;

const bgColorType = (color) => {
  switch (color) {
    case "#20D472":
      return "#20D472";
    case "#11ACFD":
      return "#11ACFD";
    case "#FCB600":
      return "FCB600";
    default:
      return "#8E007E";
  }
};

export const TotalValue = styled.div`
  display: flex;

  & > div {
    height: 50px;
    background: #fff;
    box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
    border-radius: 6px;
    margin-right: 14px;
    ${display_flex};
    justify-content: space-around;
    font-weight: 600;
    flex: 1;

    .circle-label {
      display: inline-block;
      width: 14px;
      height: 14px;
      border-radius: 7px;
      background-color: ${({ color }) => bgColorType(color)};
    }
  }

  .total-value__item {
    font-size: ${({ fSize }) => (fSize === "16px" ? "38px" : "18px")};
  }
`;

CardContainerV.Column = styled.div`
  flex: 1;
`;

CardContainerV.Column.Card = styled.div`
  padding: 18px 16px;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  margin-top: 8px;
  margin-right: ${({ distance }) =>
    distance.toLowerCase() === "yopilgan" ? "0" : "14px"};
  &:hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }

  /* header styles */
  .card-header {
    ${display_flex};
    justify-content: space-between;
    border-bottom: 1px solid rgba(151, 151, 151, 0.2);
    padding-bottom: 18px;
  }

  .card-header__number {
    display: flex;
    align-items: center;
    color: #fff;

    .number-container {
      width: 60px;
      height: 30px;
      background: #20d472;
      border-radius: 18px;
      ${display_flex};
      justify-content: center;
      font-size: 14px;
      margin-right: 10px;
    }

    .icon-container {
      width: 30px;
      height: 30px;
      background-color: #edeff3;
      border-radius: 18px;
      ${display_flex};
      justify-content: center;

      .icon {
        width: 12px;
        height: 15px;
      }
    }
  }

  .card-header__date {
    ${display_flex};

    .clock {
      margin-right: 10px;
    }
  }

  /* user info styles */
  .user-info {
    padding-top: 18px;
    .user {
      display: flex;
    }

    .user-contact_info {
      margin-left: 18px;
    }

    .name {
      font-weight: 600;
    }

    .phone {
      text-decoration: none;
      color: #2d3a45;
      opacity: 0.7;
      font-size: 14px;
    }
  }

  /* total value styles */
  .total-value {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(151, 151, 151, 0.2);
    padding: 18px 0;

    .circle {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #14e5e4;
      margin-right: 10px;
    }

    .total {
      font-weight: 700;
    }

    .total_title {
      font-size: 12px;
      opacity: 0.7;
    }
  }

  /* operator info styles */
  .operator-info {
    ${display_flex};
    justify-content: space-between;
    padding-top: 18px;

    .title {
      font-size: 14px;
      opacity: 0.6;
    }

    .name {
      font-weight: 600;
    }
  }

  .icon-wrapper {
    ${display_flex};
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #fff;
    border: 5px solid #edeff3;
    cursor: pointer;
  }

  /* branch info styles */
  .branch-info {
    ${display_flex};
    justify-content: space-between;
    margin-top: 10px;

    .title {
      font-size: 12px;
      opacity: 0.6;
    }

    .name,
    .location {
      font-weight: 600;
    }
  }
`;

export const Input = styled.input`
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  outline: none;
  padding: 5px 0 5px 10px;
`;
