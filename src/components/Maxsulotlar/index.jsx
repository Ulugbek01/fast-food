import React,{useState} from 'react'
import Header from '../Header';
import Navbar from '../Navbar';
import ProductItem from './ProductItem';
import { Container} from './style';

export const Maxsulotlar = () => {
  const navTitle = [
    {
      id: 1,
      title:'Maxsulot', 
    },
    {
      id: 2,
      title:'Kategoriya',
    },
    {
      id: 3,
    title:'Narxi',
    },
    {
      id: 4,
      title:"Qo'shimcha",
    },
    { 
      id:5,
      title:'Action'
    }
  ]
  return (
    <>
      <Header title="maxsulot"/>
      <Navbar title={navTitle}/>
      <Container>
          <ProductItem/>
      </Container>
    </>
  )
}

export default Maxsulotlar;