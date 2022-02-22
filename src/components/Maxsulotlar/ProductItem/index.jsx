import React,{useState} from 'react'
import {productItemInfo} from '../../../utils/productItemInfo';
import { ActionContainer, Container, IconWrapper, LoadingButton } from './style';

const ProductItem = () => {
    const [data, setData] = useState(productItemInfo);
    return (
        <div>
            {data.map((value) => {
                const {edit: Edit, delete: Delete} = value; 
                
                const onDelete = (id)=> {
                    const newData = data.filter((value) => value.id !== id);
                    setData(newData);
                }

                /* edit function begin*/
                const onEdit = (id)=> {
                    console.log(id);
                }
                return (
                    <Container key={value.id}>
                        <Container.Title>
                            <img src={value.url} alt="product-img" />
                            <p className='title'>{value.title}</p>
                        </Container.Title>
                        <Container.Categoriy>{value.categoriy}</Container.Categoriy>
                        <Container.Price>{value.price}</Container.Price>
                        <Container.Additional>{value.additional}</Container.Additional>
                        <ActionContainer>
                            <IconWrapper onClick={()=> onEdit(value.id)}>
                                <Edit/>
                            </IconWrapper>
                            <IconWrapper onClick={()=> onDelete(value.id)}>
                                <Delete/>
                            </IconWrapper>
                        </ActionContainer>
                    </Container>
                )
            })}
            <LoadingButton onClick={()=> setData(productItemInfo)}>Qayta yuklash</LoadingButton>
        </div>
    )
}
export default ProductItem;
