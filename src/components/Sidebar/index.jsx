import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { sidebar } from '../../utils/sidebar';
import { Container, ExitContainer, IconWrapper, LogoContainer, NavItemContainer, NavItemWrapper } from './style';
import logo from '../../assets/imgs/main-logo.png';
import {ReactComponent as Exit} from '../../assets/icons/log-out.svg';

export const Sidebar = () => {
    const [active, setActive] = useState(1);
    const onId = (id)=> {
        setActive(id);
    }
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
                <NavItemWrapper key={id} active={id === active} onClick={()=> onId(id)}>
                    <IconWrapper>
                        <Icon/>
                    </IconWrapper>
                    <NavLink className='nav-link' to={pathname}>{title}</NavLink>
                </NavItemWrapper>
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