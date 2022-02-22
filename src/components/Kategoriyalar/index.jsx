import React from 'react'
import Header from '../Header';
import Navbar from '../Navbar';
import { Container } from './style';

export const Kategoriyalar = () => {
  const navTitle = [
    {
      id:1,
      title:'kategoriya (uz)'
    },
    {
      id:2,
      title:'kategoriya (ru)'
    },
    {
      id:3,
      title:'Bosh kategoriya'
    },
    {
      id:4,
      title:'Action'
    }
  ]
  return (
    <>
      <Header title='kategoriya'/>
      <Navbar title={navTitle}/>
      <Container>
        Kategoriyalar
      </Container>
    </>
  )
}

export default Kategoriyalar;