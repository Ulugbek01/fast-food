import React,{useState} from 'react'
import Header from '../Header';
import Navbar from '../Navbar';
import { filial } from '../../utils/filial';
import {ReactComponent as Check} from '../../assets/icons/check.svg';
import { Container, CardWrapper, ActionContainer, IconWrapper, Input } from './style';

export const Filiallar = () => {
  const [data, setData] = useState(filial);
  const [select, setSelect] = useState(null);
  const [title, setTitle] = useState('');

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

  /* Edit function */
  const onEdit = (id, branchUz) => {
    setSelect(id);
    setTitle(branchUz);
  }

  // onSave function
  const onSave = () => {
    const newEditData = data.map((value) => value.id === select ? {...value, branchUz: title} : value);
    setData(newEditData);
    setSelect(null);
  }

  return (
    <>
      <Header title='filial'/>
      <Navbar title={navTitle}/>
      <Container>
        {data.map(({id, branchUz, branchRu, intended, workTime, editIcon: Edit, deleteIcon: Delete, location: Map}) => 
          <CardWrapper key={id}> 
            <div>{ select === id ? <Input value={title} onChange={(e)=> setTitle(e.target.value)}/> : branchUz}</div>
            <div>{branchRu}</div>
            <div>{intended}</div>
            <div>{workTime}</div>
            <ActionContainer>
              <IconWrapper><Map/></IconWrapper>
              {select === id ? 
              <IconWrapper onClick={onSave}><Check/></IconWrapper>
              :
              <IconWrapper onClick={()=> onEdit(id, branchUz)}><Edit/></IconWrapper>
              }
              <IconWrapper onClick={()=> onDelete(id)}><Delete/></IconWrapper>
            </ActionContainer>
          </CardWrapper>
        )}
      </Container>
    </>
  )
}

export default Filiallar;