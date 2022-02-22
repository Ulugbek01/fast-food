import styled, { css } from "styled-components";

const flexBox = css`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #fff;
  height: 100vh;
  padding-right: 24px;
`;

export const NavItemContainer = styled.div`
  border-left: 4px solid #fcb600;

  .nav-link {
    ${flexBox};
    margin-bottom: 8px;
    padding: 6px 0 6px 36px;
    text-decoration: none;
    color: #2d3a45;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .active {
    color: #fff;
    background-color: #fcb600;
    border-radius: 0px 6px 6px 0px;
  }
`;

export const IconWrapper = styled.div`
  ${flexBox};
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background-color: #f6f6f6;
  margin-right: 12px;
`;

/* Logo styles */
export const LogoContainer = styled.div`
  ${flexBox};
  margin-bottom: 64px;
  padding: 24px 0 0 24px;

  .logo-img {
    border-radius: 50%;
  }

  .logo-info {
    margin-left: 20px;
  }

  .logo-info p {
    opacity: 0.5;
    font-size: 14px;
  }
`;

/* Log-out styles */
export const ExitContainer = styled.div`
  ${flexBox};
  padding: 60px 0 0 40px;

  .exit {
    text-decoration: none;
    color: #2d3a45;
  }
`;
