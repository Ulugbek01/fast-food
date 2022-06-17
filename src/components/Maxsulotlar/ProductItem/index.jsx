import React,{useContext, useState} from 'react'
import {ReactComponent as Check} from '../../../assets/icons/check.svg';
import { ActionContainer, Container, IconWrapper, Input, LoadingButton } from './style';
import { Context } from '../../../context/productContext';
import { productItemInfo } from '../../../utils/productItemInfo';

const ProductItem = () => {
    const [productData, setProductData] = useContext(Context);
    const [select, setSelect] = useState(null);
    const [title, setTitle] = useState('');

    return (
        <div>
            {productData.map((value) => {
                const {edit: Edit, delete: Delete} = value; 
                
                const onDelete = (id)=> {
                    const newData = productData.filter((value) => value.id !== id);
                    setProductData(newData);
                }

                /* edit function */

                const onEdit = (value)=> {
                    setProductData(value.id);
                    setTitle(value.categoriy);
                }

                const onSave = () => {
                    const newEditData = productData.map((value) => value.id === select ? {...value, categoriy: title}: value)
                    setProductData(newEditData);
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
            <LoadingButton onClick={()=> setProductData(productItemInfo)}>Yana yuklash</LoadingButton>
        </div>
    )
}
export default ProductItem;
