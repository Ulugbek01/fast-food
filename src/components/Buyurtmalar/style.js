import styled, { css } from "styled-components";

const display_flex = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
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
`;
