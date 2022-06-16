import React,{useContext, useState} from 'react'
import {productItemInfo} from '../../../utils/productItemInfo';
import {ReactComponent as Check} from '../../../assets/icons/check.svg';
import { ActionContainer, Container, IconWrapper, Input, LoadingButton } from './style';
import { Context } from '../../../context/headerContext';

const ProductItem = () => {
    const [data, setData] = useContext(Context);
    const [select, setSelect] = useState(null);
    const [title, setTitle] = useState('');
    return (
        <div>
            {data.map((value) => {
                const {edit: Edit, delete: Delete} = value; 
                
                const onDelete = (id)=> {
                    const newData = data.filter((value) => value.id !== id);
                    setData(newData);
                }

                /* edit function */

                const onEdit = (value)=> {
                    setSelect(value.id);
                    setTitle(value.categoriy);
                }

                const onSave = () => {
                    const newEditData = data.map((value) => value.id === select ? {...value, categoriy: title}: value)
                    setData(newEditData);
                    setSelect(null);
                }

                return (
                    <Container key={value.id}>
                        <Container.Title>
                            <img src={value.url} alt="product-img" />
                            <p className='title'>{value.title}</p>
                        </Container.Title>
                        <Container.Categoriy>{select === value.id ? <Input onChange={(e)=> setTitle(e.target.value)} value={title}/> : value.categoriy}</Container.Categoriy>
                        <Container.Price>{value.price}</Container.Price>
                        <Container.Additional>{value.additional}</Container.Additional>
                        <ActionContainer>
                            {select === value.id ? 
                            <IconWrapper onClick={onSave}><Check/></IconWrapper>
                            :    
                            <IconWrapper onClick={()=> onEdit(value)}>
                                <Edit/>
                            </IconWrapper>
                            }
                            <IconWrapper onClick={()=> onDelete(value.id)}>
                                <Delete/>
                            </IconWrapper>
                        </ActionContainer>
                    </Container>
                )
            })}
            <LoadingButton onClick={()=> setData(productItemInfo)}>Yana yuklash</LoadingButton>
        </div>
    )
}
export default ProductItem;
