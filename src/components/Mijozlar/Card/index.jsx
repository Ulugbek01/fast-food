import React,{useState} from 'react'
import {mijoz} from '../../../utils/mijoz';
import { ReactComponent as Check } from "../../../assets/icons/check-circle.svg";
import {CardWrapper, ActionContainer, IconWrapper, LoadingButton} from './style';

export const Card = () => {
    const [data, setData] = useState(mijoz);
    const [active, setActive] = useState(true);

    const onDelete = (id)=> {
        let newData = data.filter((value) => value.id !== id);
        setData(newData);
      }
    
      const getId = (id)=> {
        setActive(!active);
      }
    
  return (
    <div>
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
    </div>
  )
}
