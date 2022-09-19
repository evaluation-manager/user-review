import React from 'react';

import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {InfoAvalicao} from '../pages/Info/Info';


export const Router =()=>{
    return (
        <BrowserRouter>
        

        <Routes>
            
             <Route path='/' element={<InfoAvalicao/>}/>
           
            {/*<Route element={<NotFound/>}/>*/}
        </Routes>
        </BrowserRouter>
    )
}