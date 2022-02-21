import React from 'react'
import {useLocation} from 'react-router-dom';
import { Container } from './style';

export const Generic = () => {
    const location = useLocation();
    console.log(location);
  return (
    <Container>{location.pathname}</Container>
  )
}

export default Generic;