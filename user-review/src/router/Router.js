import React from 'react';

import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {InfoAvalicao} from '../pages/Info/Info';
import { Pergunta } from '../pages/perguntas/Perguntas';
//import {NotFound} from '../pages/NotFound/NotFound';
export const Router =()=>{
    return (
        <BrowserRouter>
        

        <Routes>
            
             <Route path='' element={<InfoAvalicao/>}/>
              <Route path='/step1' element={<Pergunta/>}/>
            {/*<Route element={<NotFound/>}/>*/}
        </Routes>
        </BrowserRouter>
    )
}