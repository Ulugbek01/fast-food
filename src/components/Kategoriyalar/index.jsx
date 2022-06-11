import React,{useState} from 'react'
import Header from '../Header';
import Navbar from '../Navbar';
import { kategoriya } from '../../utils/kategoriya';
import {ReactComponent as Check} from '../../assets/icons/check.svg';
import { ActionContainer, CardWrapper, Container, IconWrapper, Input } from './style';

export const Kategoriyalar = () => {
  const [data, setData] = useState(kategoriya);
  const [select, setSelect] = useState(null);
  const [title, setTitle] = useState('');

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

  const onDelete = (id)=> {
    let newData = data.filter((value)=> value.id !== id);
    setData(newData);
  }

  const onEdit = (id, mainCategory) => {
    setSelect(id);
    setTitle(mainCategory)
  }

  const onSave = () => {
    const newEditData = data.map((value)=> value.id === select ? {...value, mainCategory: title}: value)
    setData(newEditData);
    setSelect(null);
  }

  return (
    <>
      <Header title='kategoriya'/>
      <Navbar title={navTitle}/>
      <Container>
        {data.map(({id, nameUz, nameRu, mainCategory, editIcon: Edit, deleteIcon: Delete}) => 
          <CardWrapper key={id}>
            <div>{nameUz}</div>
            <div>{nameRu}</div>
            <div>{id === select ? <Input value={title} onChange={(e)=> setTitle(e.target.value)}/> : mainCategory}</div>
            <ActionContainer>
              {select === id ? 
              <IconWrapper onClick={onSave}><Check/></IconWrapper>
              :
              <IconWrapper onClick={()=> onEdit(id, mainCategory)}>
                <Edit/>
              </IconWrapper>  
              }
              <IconWrapper onClick={()=>onDelete(id)}>
                <Delete/>
              </IconWrapper>
            </ActionContainer>
          </CardWrapper>
        )}
      </Container>
    </>
  )
}

export default Kategoriyalar;