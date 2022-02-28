import styled from "styled-components";

export const Container = styled.div`
  margin: 0 40px;
`;

export const Drawer = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #888;
  position: absolute;
  right: ${({ open }) => (open ? "0" : "-300px")};
  top: 80px;
  z-index: 100;
`;
