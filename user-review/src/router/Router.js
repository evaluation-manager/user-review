import React from 'react';

import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { UserAvaliacao } from '../pages/avaliacao/emogiAvaliacao';
import {InfoAvalicao} from '../pages/Info/Info';


export const Router =()=>{
    return (
        <BrowserRouter>
        

        <Routes>
            
           
                <Route path="/" element={<UserAvaliacao />} />
                <Route path='/Survey' element={<InfoAvalicao/>}/>
        </Routes>
        </BrowserRouter>
    )
}