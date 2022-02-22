import React from 'react'
import Header from '../Header';
import Navbar from '../Navbar';
import { Container } from './style';

export const Filiallar = () => {
  const navTitle = [
    {
      id: 1,
      title:'Filial nomi (uz)'
    },
    {
      id: 2,
      title:'Filial nomi (ru)'
    },
    {
      id: 3,
      title:"Mo'ljal"
    },
    {
      id: 4,
      title:"Ish vaqti"
    },
    {
      id: 5,
      title:"Action"
    }
  ]
  return (
    <>
      <Header title='filial'/>
      <Navbar title={navTitle}/>
      <Container>
        Filiallar
      </Container>
    </>
  )
}

export default Filiallar;