import React from 'react'
import { NavLink } from 'react-router-dom';
import { sidebar } from '../../utils/sidebar';
import { Container, NavItemWrapper } from './style';

export const Sidebar = () => {
  return (
    <Container>
        {sidebar.map(({id, icon: Icon, pathname, title})=> 
            <NavItemWrapper>
                <Icon/>
                <NavLink key={id} to={pathname}>{title}</NavLink>
            </NavItemWrapper>
        )}
    </Container>
  )
}

export default Sidebar;