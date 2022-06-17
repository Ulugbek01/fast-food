import styled, { css } from "styled-components";

const display_flex = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  ${display_flex};
  width: 100%;
  /* position: fixed;
  top: 0;
  z-index: 999; */
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

export const SearchWrapper = styled.div`
  ${display_flex};
  flex: 1;
  height: 80px;
  background-color: #fff;
  padding-left: 48px;

  .search-item_wrapper {
    width: 300px;
    position: relative;
    margin-right: 24px;
  }

  .search-icon {
    position: absolute;
    top: 15px;
    right: 20px;
  }
`;

export const SearchItem = styled.input`
  width: 300px;
  height: 48px;
  background-color: #edeff3;
  border-radius: 24px;
  border: none;
  outline: none;
  padding: 20px;
  color: #2d3a45;
  font-size: 14px;

  &::placeholder {
    opacity: 0.5;
  }
`;

export const FilterIconWrapper = styled.div`
  ${display_flex};
  justify-content: center;
  width: 48px;
  height: 48px;
  background: #fff;
  border-radius: 24px;
  border: 6px solid #edeff3;
  cursor: pointer;
`;
