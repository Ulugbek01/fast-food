import React from 'react'
import {Container, AddProductWrapper, IconWrapper, SearchWrapper, SearchItem,FilterIconWrapper } from './style';
import {ReactComponent as Plus} from '../../assets/icons/plus.svg';
import {ReactComponent as Search} from '../../assets/icons/search.svg';
import {ReactComponent as Filter} from '../../assets/icons/filter.svg';

export const Header = (props) => {
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
                    <SearchItem placeholder='Qidirish'/>
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