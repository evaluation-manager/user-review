import React from 'react';

import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { UserAvaliacao } from '../pages/avaliacao/emogiAvaliacao';
import { Captcha } from '../pages/Info/captcha';
import { Comments } from '../pages/Info/comments';
import { InfoAvalicao } from '../pages/Info/Info';

export const Router =()=>{
    return (
        <BrowserRouter>
        
        <Routes>
      
        <Route path='/survey/:id' element={<InfoAvalicao/>}/>
        <Route path='/grades' element={<UserAvaliacao/>}/>
        <Route path='/grades/comments' element={<Comments/>}/>
        </Routes>

        </BrowserRouter>
    )
}