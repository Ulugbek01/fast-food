import styled, { css } from "styled-components";

const display_flex = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  padding: 0 40px;
`;

export const CardWrapper = styled.div`
  ${display_flex};
  height: 60px;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  background-color: #fff;
  margin-bottom: 8px;
  margin-right: auto;
  padding: 0 20px;

  &:hover {
    box-shadow: 0px 20px 25px rgba(176, 177, 181, 0.432802);
  }

  & > div {
    flex: 1;
  }
`;

export const ActionContainer = styled.div`
  ${display_flex};
  justify-content: center;
`;

export const IconWrapper = styled.div`
  ${display_flex};
  justify-content: center;
  width: 40px;
  height: 40px;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border: 4px solid #edeff3;
  border-radius: 50%;
  cursor: pointer;

  &:first-child {
    margin-right: 24px;
  }
`;
