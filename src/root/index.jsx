import React from 'react'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { sidebar } from '../utils/sidebar';
import Sidebar from '../components/Sidebar';
import { Container, Wrapper } from './style';
export const Root = () => {
  return (
    <Container>
       <BrowserRouter>
       <Sidebar />
       <Wrapper>  
            <Routes>
                {sidebar.map(({id, pathname, component: Element})=> 
                    <Route key={id} path={pathname} element={<Element/>}/>
                )}
                <Route path='/' element={<Navigate to={'/'}/>}/>
                <Route path='*' element={<h4>Page Not Found</h4>}/>
            </Routes>
        </Wrapper>
       </BrowserRouter>  
    </Container>
  )
}

export default Root;