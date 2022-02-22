import React from 'react'
import Header from '../Header';
import Navbar from '../Navbar';
import { Container } from './style';

export const Mijozlar = () => {
  const navTitle = [
    {
      id:1,
      title: 'Mijoz ismi'
    },
    {
      id:2,
      title: 'Telefon raqam'
    },
    {
      id:3,
      title: 'Buyurtmalar soni'
    },
    {
      id:4,
      title: 'Status'
    },
    {
      id:5,
      title: 'Action'
    }
  ]
  return (
    <>
      <Header title='mijoz'/>
      <Navbar title={navTitle}/>
      <Container>
        Mijozlar
      </Container>
    </>
  )
}

export default Mijozlar;