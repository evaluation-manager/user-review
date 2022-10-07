import React from 'react';

import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { UserAvaliacao } from '../pages/avaliacao/emogiAvaliacao';
import { Comments } from '../pages/Info/comments';
import { Notfound } from '../pages/Info/NotFound';
import { Thanks } from '../pages/Info/thanks';


export const Router =()=>{
    return (
        <BrowserRouter>
        
        <Routes>
      
        <Route path='/survey/:id' element={<UserAvaliacao/>}/>
       <Route path='*' element={<Notfound/>}/>
      
        <Route path='/grades/comments' element={<Comments/>}/>
        <Route path='/agradecimento' element={<Thanks/>}/>
        </Routes>

        </BrowserRouter>
    )
}