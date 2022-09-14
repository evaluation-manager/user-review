import React from 'react';

import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {InfoAvalicao} from '../pages/Info/Info';
import { Cadastrar } from '../pages/perguntas/Cadastrar';

export const Router =()=>{
    return (
        <BrowserRouter>
        

        <Routes>
            
             <Route path='' element={<InfoAvalicao/>}/>
              <Route path='/step1' element={<Cadastrar/>}/>
            {/*<Route element={<NotFound/>}/>*/}
        </Routes>
        </BrowserRouter>
    )
}