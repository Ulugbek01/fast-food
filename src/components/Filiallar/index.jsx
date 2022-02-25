import React,{useState} from 'react'
import Header from '../Header';
import Navbar from '../Navbar';
import { filial } from '../../utils/filial';
import { Container, CardWrapper, ActionContainer, IconWrapper } from './style';

export const Filiallar = () => {
  const [data, setData] = useState(filial);
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

  const onDelete = (id)=> {
    let newData = data.filter((value)=> value.id !== id);
    setData(newData);
  }

  return (
    <>
      <Header title='filial'/>
      <Navbar title={navTitle}/>
      <Container>
        {data.map(({id, branchUz, branchRu, intended, workTime, editIcon: Edit, deleteIcon: Delete, location: Map}) => 
          <CardWrapper key={id}> 
            <div>{branchUz}</div>
            <div>{branchRu}</div>
            <div>{intended}</div>
            <div>{workTime}</div>
            <ActionContainer>
              <IconWrapper><Map/></IconWrapper>
              <IconWrapper><Edit/></IconWrapper>
              <IconWrapper onClick={()=> onDelete(id)}><Delete/></IconWrapper>
            </ActionContainer>
          </CardWrapper>
        )}
      </Container>
    </>
  )
}

export default Filiallar;