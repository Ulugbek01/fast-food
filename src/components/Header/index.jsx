import React,{useContext} from 'react'
import {Container, AddProductWrapper, IconWrapper, SearchWrapper, SearchItem,FilterIconWrapper } from './style';
import {ReactComponent as Plus} from '../../assets/icons/plus.svg';
import {ReactComponent as Search} from '../../assets/icons/search.svg';
import {ReactComponent as Filter} from '../../assets/icons/filter.svg';
import { Context } from '../../context/productContext';
import { productItemInfo } from '../../utils/productItemInfo';


export const Header = (props) => {
    const [productData, setProductData] = useContext(Context);
    
    const onSearch = ({target}) => {
        const newData = productData.filter((value) => value.categoriy.toLowerCase().includes((target.value.toLowerCase())))
        setProductData(newData);

        if(target.value === ''){
            setProductData(productItemInfo);
        }
    }
    
  return (
    <Container>
            <AddProductWrapper>
                <IconWrapper>
                    <Plus />
                </IconWrapper>
                <div className='title'>Yangi {props.title}<br /> qo'shish</div>
            </AddProductWrapper>
            <SearchWrapper>
                <div className='search-item_wrapper'>
                    <SearchItem placeholder='Qidirish' onChange={onSearch}/>
                    <Search className='search-icon' />
                </div>
                <FilterIconWrapper>
                    <Filter />
                </FilterIconWrapper>
            </SearchWrapper>
        </Container>
  )
}

export default Header;