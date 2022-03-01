import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 100px 0 20px;
  padding: 0 40px;
`;

Container.Item = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);
  border-radius: 6px;
  flex: 1;

  &:first-child {
    margin-right: 10px;
  }
`;

Container.Item.Header = styled.div`
  height: 50px;
  background-color: #fff;
  box-shadow: 0px 2px 6px rgba(174, 176, 181, 0.314986);
  border-radius: 6px 6px 0px 0px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
