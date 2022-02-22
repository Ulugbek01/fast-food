import React from 'react'
import { NavLink } from 'react-router-dom';
import { sidebar } from '../../utils/sidebar';
import { Container, ExitContainer, IconWrapper, LogoContainer, NavItemContainer } from './style';
import logo from '../../assets/imgs/main-logo.png';
import {ReactComponent as Exit} from '../../assets/icons/log-out.svg';

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
                <NavLink className={'nav-link'} to={pathname} key={id}> 
                    <IconWrapper>
                        <Icon/>
                    </IconWrapper>{title}
                </NavLink>
            )}
        </NavItemContainer>

        <ExitContainer>
            <IconWrapper>
                <Exit/>
            </IconWrapper>
            <NavLink className='exit' to={'/'}>Chiqish</NavLink>
        </ExitContainer>
    </Container>
  )
}

export default Sidebar;