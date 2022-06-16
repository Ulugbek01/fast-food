import React,{useContext, useState} from 'react'
import {Container, AddProductWrapper, IconWrapper, SearchWrapper, SearchItem,FilterIconWrapper } from './style';
import {ReactComponent as Plus} from '../../assets/icons/plus.svg';
import {ReactComponent as Search} from '../../assets/icons/search.svg';
import {ReactComponent as Filter} from '../../assets/icons/filter.svg';
import { Context } from '../../context/headerContext';


export const Header = (props) => {
    const [data, setData] = useContext(Context);
    const [title, setTitle] = useState('')
    
    const onSearch = () => {
        const newData = data.filter((value) => value.categoriy.includes((title)))
        setData(newData);
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
                    <SearchItem placeholder='Qidirish' onChange={(e) => setTitle(e.target.value)}/>
                    <Search className='search-icon' />
                </div>
                <FilterIconWrapper>
                    <Filter />
                </FilterIconWrapper>
                {data.length}
            </SearchWrapper>
        </Container>
  )
}

export default Header;