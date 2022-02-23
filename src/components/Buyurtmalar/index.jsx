import React,{useState} from 'react'
import { Container, HeaderContainer, AddProductWrapper, IconWrapper, FilterItemWrapper, FilterItem, ToggleBtnWrapper } from './style';
import {ReactComponent as Plus} from '../../assets/icons/plus.svg';
import {ReactComponent as IconX} from '../../assets/icons/Group 2.svg';
import {ReactComponent as IconY} from '../../assets/icons/x.svg';

export const Buyurtmalar = () => {
  const [active, setActive] = useState('Yangi');
  const [toggle, setToggle] = useState(true);

  const onActive = (text)=> {
    setActive(text);
  }

  const onClick = () => {
    setToggle(!toggle);
  }

  return (
    <div>
      <HeaderContainer>
        <AddProductWrapper>
          <IconWrapper>
            <Plus />
          </IconWrapper>
          <p className='title'>Yangi buyurtma<br /> qo'shish</p>
        </AddProductWrapper>

        <FilterItemWrapper>
          <div className='filter-items__wrapper'>
            <FilterItem isActive={active === 'Yangi'} onClick={()=>onActive('Yangi')}>Yangi</FilterItem>
            <FilterItem isActive={active === 'Qabul qilingan'} onClick={()=>onActive('Qabul qilingan')}>Qabul qilingan</FilterItem>
            <FilterItem isActive={active === "Jo'natilgan"} onClick={()=>onActive("Jo'natilgan")}>Jo'natilgan</FilterItem>
            <FilterItem isActive={active === 'Yopilgan'} onClick={()=>onActive('Yopilgan')}>Yopilgan</FilterItem>
          </div>
        </FilterItemWrapper>

        <ToggleBtnWrapper>
          <div className='container'>
            <ToggleBtnWrapper.Btn active={toggle} onClick={()=> onClick()}><IconX/></ToggleBtnWrapper.Btn>
            <ToggleBtnWrapper.Btn active={!toggle} onClick={()=> onClick()}><IconY/></ToggleBtnWrapper.Btn>
          </div>
        </ToggleBtnWrapper>
      </HeaderContainer>
      <Container>
        Buyurtmalar
      </Container>
    </div>
  )
}

export default Buyurtmalar;