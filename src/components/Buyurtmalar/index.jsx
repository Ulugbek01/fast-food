import React,{useState} from 'react'
import { Container, HeaderContainer, AddProductWrapper, IconWrapper, FilterItemWrapper, FilterItem, ToggleBtnWrapper, CardContainer, CloseButtonWrapper, CheckButtonWrapper } from './style';
import {cardInfo} from '../../mock/cardInfo'
import {ReactComponent as Plus} from '../../assets/icons/plus.svg';
import {ReactComponent as IconX} from '../../assets/icons/Group 2.svg';
import {ReactComponent as IconY} from '../../assets/icons/Group.svg';
import { ReactComponent as Clipboard } from '../../assets/icons/clipboard.svg';
import { ReactComponent as Truck } from '../../assets/icons/truck.svg';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import { ReactComponent as Path } from '../../assets/icons/Path.svg';
import { ReactComponent as Clock } from '../../assets/icons/clock.svg';
import { ReactComponent as Close } from '../../assets/icons/x.svg';
import { ReactComponent as Check } from '../../assets/icons/check.svg';

export const Buyurtmalar = () => {
  const [data, setData] = useState(cardInfo);
  const [active, setActive] = useState('Yangi');
  const [toggle, setToggle] = useState(true);

  const onActive = (text)=> {
    setActive(text);
  }

  const onClick = () => {
    setToggle(!toggle);
  }

  const onDelete = (id) => {
    // const newData = activeData.filter((value) => value.id !== id);
    // setCard(newData);
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
            <ToggleBtnWrapper.Btn active={toggle} onClick={()=> onClick()}><IconX className='icon'/></ToggleBtnWrapper.Btn>
            <ToggleBtnWrapper.Btn active={!toggle} onClick={()=> onClick()}><IconY className='icon'/></ToggleBtnWrapper.Btn>
          </div>
        </ToggleBtnWrapper>
      </HeaderContainer>
      <Container>
        {data.filter((value)=> value.categoria.toLowerCase() === active.toLowerCase()).map((value)=>
            <CardContainer key={value.id}>
              <CardContainer.Time>
                  <div className='order-number'>
                      <div className='order-id'>{value.orderId}</div>
                      <dir className='icon-wrapper'><Path /></dir>
                  </div>
                  <div className='clock-wrapper'>
                      <Clock className='clock' />
                      <span>{value.time.getHours()}:</span>
                      <span>{value.time.getMinutes()}</span>
                  </div>
              </CardContainer.Time>
              <CardContainer.User>
                  <div className='user-info'>
                      <User />
                      <h3 className='user-name'>{value.user.name}</h3>
                  </div>
                  <div className='phone-info'>
                      <Phone />
                      <p className='phone-number'>{value.user.phone}</p>
                  </div>
              </CardContainer.User>
              <CardContainer.Price>
                  <div className='price-wrapper'>
                      <div className='left-wrapper'>
                          <Clipboard className='icon' />
                          <p>35,400 UZS</p>
                      </div>
                      <div className='payment-type'><span className='circle'></span>Payme</div>
                  </div>
                  <div className='truck-wrapper'>
                      <Truck className='icon' />
                      <p>5,000 UZS</p>
                  </div>
                  <div className='total-wrapper'>
                      <p className='title'>Umumiy summa</p>
                      <h3 className='total-value'>{value.total}</h3>
                  </div>
              </CardContainer.Price>
              <CardContainer.Location>
                  <div className='operator-info'>
                      <p className='title'>Operator:</p>
                      <h3 className='name'>{value.operator.name}</h3>
                  </div>
                  <div>
                      <p className='title'>Filal:</p>
                      <h3 className='filial'>{value.filial.title}</h3>
                      <h3 className='location'>{value.filial.location}</h3>
                  </div>
                  <CloseButtonWrapper onClick={() => onDelete(value.id)}><Close /></CloseButtonWrapper>
                  <CheckButtonWrapper><Check /></CheckButtonWrapper>
              </CardContainer.Location>
        </CardContainer>
        )}
      </Container>
    </div>
  )
}

export default Buyurtmalar;