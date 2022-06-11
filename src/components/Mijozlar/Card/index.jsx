import React,{useState} from 'react'
import {mijoz} from '../../../utils/mijoz';
import { ReactComponent as Check } from "../../../assets/icons/check-circle.svg";
import {ReactComponent as Save} from '../../../assets/icons/check.svg';
import {CardWrapper, ActionContainer, IconWrapper, LoadingButton, Input} from './style';

export const Card = () => {
    const [data, setData] = useState(mijoz);
    const [active, setActive] = useState(true);
    const [select, setSelect] = useState(null);
    const [title, setTitle] = useState('');

    const onDelete = (id)=> {
        let newData = data.filter((value) => value.id !== id);
        setData(newData);
      }
    
      const getId = (id)=> {
        setActive(!active);
      }
    
    const onEdit = (id, phone)=> {
      setSelect(id);
      setTitle(phone);
    }

    const onSave = () => {
      const newEditData = data.map((value) => value.id === select ? {...value, phone: title} : value);
      setData(newEditData);
      setSelect(null);
      console.log(newEditData);
    }
      
  return (
    <div>
        {data.map(({id, name, phone, orderCount, status, slash: Slash, editIcon: Edit, deleteIcon: Delete}) => 
          <CardWrapper key={id}>
            <div>{name}</div>
            <div>{id === select ? <Input type={'number'} value={title} onChange={(e)=> setTitle(e.target.value)} /> : phone}</div>
            <div className='order-count'>{orderCount}</div>
            <div className={`status status-${active}`}>{active  ? status : 'Block'}</div>
            <ActionContainer>
              <IconWrapper onClick={(id)=> getId(id)}>{(active) ? <Slash/>: <Check/>}</IconWrapper>
              {
                id === select ? <IconWrapper onClick={onSave}><Save/></IconWrapper>
                :
                <IconWrapper onClick={()=> onEdit(id, phone)}><Edit/></IconWrapper>
              }
              <IconWrapper onClick={()=> onDelete(id)}><Delete/></IconWrapper>
            </ActionContainer>
          </CardWrapper>
        )}
        <LoadingButton onClick={()=> setData(mijoz)}>Yana yuklash</LoadingButton>
    </div>
  )
}
