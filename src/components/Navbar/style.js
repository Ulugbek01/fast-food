import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  background-color: #fff;
  margin: 100px 0 20px 0;
  box-shadow: 0px 3px 6px rgba(141, 155, 168, 0.35895);
  padding-left: 40px;

  .nav-title {
    font-size: 14px;
    text-transform: uppercase;
    flex: 1;
    border-left: 1px solid;
    border-color: rgba(141, 155, 168, 0.4);
    padding-left: 12px;
  }

  .nav-title:nth-child(4) {
    padding-right: 40px;
  }

  .nav-title:first-child {
    border-left: none;
  }
`;

NavbarContainer.Item = styled.h3``;
