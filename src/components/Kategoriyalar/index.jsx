import React,{useState} from 'react'
import Header from '../Header';
import Navbar from '../Navbar';
import { kategoriya } from '../../utils/kategoriya';
import { ActionContainer, CardWrapper, Container, IconWrapper } from './style';

export const Kategoriyalar = () => {
  const [data, setData] = useState(kategoriya);

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

  return (
    <>
      <Header title='kategoriya'/>
      <Navbar title={navTitle}/>
      <Container>
        {data.map(({id, nameUz, nameRu, mainCategory, editIcon: Edit, deleteIcon: Delete}) => 
          <CardWrapper key={id}>
            <div>{nameUz}</div>
            <div>{nameRu}</div>
            <div>{mainCategory}</div>
            <ActionContainer>
              <IconWrapper>
                <Edit/>
              </IconWrapper>
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