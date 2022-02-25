import React, { useState } from 'react'
import { Container, HeaderContainer, AddProductWrapper, IconWrapper, FilterItemWrapper, FilterItem, ToggleBtnWrapper, CardContainer, CloseButtonWrapper, CheckButtonWrapper, ContainerV, TitleContainer, TotalValue } from './style';
import { cardInfo } from '../../mock/cardInfo'
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as IconX } from '../../assets/icons/Group 2.svg';
import { ReactComponent as IconY } from '../../assets/icons/Group.svg';
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
    const [dataV, setDataV] = useState(cardInfo);
    const [active, setActive] = useState('Yangi');
    const [toggle, setToggle] = useState(true);

    const onActive = (text) => {
        setActive(text);
    }

    const onClick = () => {
        setToggle(!toggle);
    }

    const onDelete = (id) => {
        const newData = data.filter((value) => value.categoria.toLowerCase() === active.toLowerCase()).filter((value) => value.id !== id);
        setData(newData);
        console.log(newData);
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
                        <FilterItem isActive={active === 'Yangi'} onClick={() => onActive('Yangi')}>Yangi</FilterItem>
                        <FilterItem isActive={active === 'Qabul qilingan'} onClick={() => onActive('Qabul qilingan')}>Qabul qilingan</FilterItem>
                        <FilterItem isActive={active === "Jo'natilgan"} onClick={() => onActive("Jo'natilgan")}>Jo'natilgan</FilterItem>
                        <FilterItem isActive={active === 'Yopilgan'} onClick={() => onActive('Yopilgan')}>Yopilgan</FilterItem>
                    </div>
                </FilterItemWrapper>

                <ToggleBtnWrapper>
                    <div className='container'>
                        <ToggleBtnWrapper.Btn active={toggle} onClick={() => onClick()}><IconX className='icon' /></ToggleBtnWrapper.Btn>
                        <ToggleBtnWrapper.Btn active={!toggle} onClick={() => onClick()}><IconY className='icon' /></ToggleBtnWrapper.Btn>
                    </div>
                </ToggleBtnWrapper>
            </HeaderContainer>
            <Container>
                {toggle ? data.filter((value) => value.categoria.toLowerCase() === active.toLowerCase()).map((value) =>
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
                ) : <div>
                        <TitleContainer>
                            <div>Yangi <span className='items_length'>4</span></div>
                            <div>Qabul qilingan <span className='items_length'>3</span></div>
                            <div>Jo'natilgan <span className='items_length'>11</span></div>
                            <div>Yopilgan <span className='items_length'>12</span></div>
                        </TitleContainer>

                        <TotalValue>
                            <div className='total-value__item'><span className='circle-label' color={'#20D472'}></span> 12,230,000 UZS</div>
                            <div className='total-value__item'><span className='circle-label' color={'#11ACFD'}></span> 12,230,000 UZS</div>
                            <div className='total-value__item'><span className='circle-label' color={'#FCB600'}></span> 12,230,000 UZS</div>
                            <div className='total-value__item'><span className='circle-label' color={'#8E007E'}></span> 12,230,000 UZS</div>
                        </TotalValue>

                        <ContainerV>
                            {dataV.map((value) =>
                                <div style={{marginRight: '10px'}}>
                                    <p>{value.categoria}</p>
                                </div>
                                // <ContainerV.Card key={value.id} distance={value.categoria}>
                                //             <div className='card-header'>
                                //                 <div className='card-header__number'>
                                //                     <span className='number-container'>8549</span>
                                //                     <span className='icon-container'>
                                //                         <Path className='icon' />
                                //                     </span>
                                //                 </div>
                                //                 <div className='card-header__date'>
                                //                     <Clock className='clock' />
                                //                     <div>{value.time.getHours()}:{value.time.getMinutes()}</div>
                                //                 </div>
                                //             </div>

                                //             <div className='user-info'>
                                //                 <div className='user'>
                                //                     <div>
                                //                         <User />
                                //                     </div>
                                //                     <div className='user-contact_info'>
                                //                         <p className='name'>{value.user.name}</p>
                                //                         <a className='phone' href='tel:${value.user.phone}'>{value.user.phone}</a>
                                //                     </div>
                                //                 </div>
                                //             </div>

                                //             <div className='total-value'>
                                //                 <div>
                                //                     <p className='total_title'>Umumiy summa</p>
                                //                     <p className='total'>{value.total}</p>
                                //                 </div>
                                //                 <div>
                                //                     <span className='circle'></span>
                                //                     <span>Payme</span>
                                //                 </div>
                                //             </div>

                                //             <div className='operator-info'>
                                //                 <div>
                                //                     <p className='title'>Operator:</p>
                                //                     <p className='name'>{value.operator.name}</p>
                                //                 </div>
                                //                 <div className='icon-wrapper'>
                                //                     <Close />
                                //                 </div>
                                //             </div>

                                //             <div className='branch-info'>
                                //                 <div>
                                //                     <p className='title'>Filial:</p>
                                //                     <p className='name'>{value.filial.title}</p>
                                //                     <p className='location'>{value.filial.location}</p>
                                //                 </div>
                                //                 <div className='icon-wrapper'>
                                //                     <Check />
                                //                 </div>
                                //             </div>
                                // </ContainerV.Card>    
                            )}
                        </ContainerV>
                    </div>
                }
            </Container>
        </div>
    )
}

export default Buyurtmalar;