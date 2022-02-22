import React from 'react'
import { NavbarContainer } from './style';

const Navbar = ({title}) => {
    return (
        <NavbarContainer>
           {title.map((value) => 
                <NavbarContainer.Item className='nav-title' key={value.id}>{value.title}</NavbarContainer.Item>
           ) }
        </NavbarContainer>
    )
}   

export default Navbar;