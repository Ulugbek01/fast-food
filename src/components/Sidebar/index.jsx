import React from 'react'
import { NavLink } from 'react-router-dom';
import { sidebar } from '../../utils/sidebar';
import { Container, IconWrapper, LogoContainer, NavItemContainer, NavItemWrapper } from './style';
import logo from '../../assets/imgs/main-logo.png';

export const Sidebar = () => {
  return (
    <Container>
        <LogoContainer>
            <div className='logo-container'>
                <img src={logo} alt="logo-img" className='logo-img'/>
            </div>
            <div className='logo-info'>
                <h4>Fast Food</h4>
                <p>Online maxsulot sotuvi</p>
            </div>
        </LogoContainer>

        <NavItemContainer>
            {sidebar.map(({id, icon: Icon, pathname, title})=> 
                <NavItemWrapper>
                    <IconWrapper>
                        <Icon/>
                    </IconWrapper>
                    <NavLink className='nav-link' key={id} to={pathname}>{title}</NavLink>
                </NavItemWrapper>
            )}
        </NavItemContainer>
    </Container>
  )
}

export default Sidebar;