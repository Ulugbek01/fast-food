import React,{useState} from 'react'
import Header from '../Header';
import Navbar from '../Navbar';
import { mijoz } from '../../utils/mijoz';
import { ActionContainer, CardWrapper, Container, IconWrapper, LoadingButton } from './style';
import { ReactComponent as Check } from "../../assets/icons/check-circle.svg";

export const Mijozlar = () => {
  const [data, setData] = useState(mijoz);
  const [active, setActive] = useState(true);

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

  const onDelete = (id)=> {
    let newData = data.filter((value) => value.id !== id);
    setData(newData);
  }

  const getId = (id)=> {
    setActive(!active);
  }

  return (
    <>
      <Header title='mijoz'/>
      <Navbar title={navTitle}/>
      <Container>
        {data.map(({id, name, phone, orderCount, status, slash: Slash, editIcon: Edit, deleteIcon: Delete}) => 
          <CardWrapper key={id}>
            <div>{name}</div>
            <div>{phone}</div>
            <div className='order-count'>{orderCount}</div>
            <div className={`status status-${active}`}>{active  ? status : 'Block'}</div>
            <ActionContainer>
              <IconWrapper onClick={(id)=> getId(id)}>{(active) ? <Slash/>: <Check/>}</IconWrapper>
              <IconWrapper><Edit/></IconWrapper>
              <IconWrapper onClick={()=> onDelete(id)}><Delete/></IconWrapper>
            </ActionContainer>
          </CardWrapper>
        )}
        <LoadingButton onClick={()=> setData(mijoz)}>Yana yuklash</LoadingButton>
      </Container>
    </>
  )
}

export default Mijozlar;