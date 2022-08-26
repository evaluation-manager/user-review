import React from 'react';

import {BrowserRouter,Routes, Route} from 'react-router-dom';
import {Avaliacao} from '../pages/avaliacao/avaliacao';

export const Router =()=>{
    return (
        <BrowserRouter>
        <Routes>
            
             <Route path='' element={<Avaliacao/>}/>
        </Routes>
        </BrowserRouter>
    )
}