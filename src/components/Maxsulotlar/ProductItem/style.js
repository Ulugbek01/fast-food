import styled, { css } from "styled-components";

const display_flex = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
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

Container.Title = styled.div`
  ${display_flex};

  .title {
    margin-left: 28px;
  }
`;

Container.Categoriy = styled.div``;

Container.Price = styled.div``;

Container.Additional = styled.div``;

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

export const LoadingButton = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid rgba(141, 155, 168, 0.289527);
  border-radius: 6px;
  cursor: pointer;
  color: #2d3a45;
  font-family: "Montserrat", sans-serif;
`;

export const Input = styled.input`
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  outline: none;
  padding: 5px 0 5px 10px;
`;
