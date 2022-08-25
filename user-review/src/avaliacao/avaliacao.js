import React from 'react';
import {UserAvaliacao} from './userAvaliacao'
import { useState } from 'react';
export const Avaliacao=()=>{
//rendeizar teste apenas se o usuairo informar a secretaria
const [exibir, setExibir]=useState(false);

function toggle(){
//console.log("oi");
setExibir(!exibir);

}

    return (
        <>
        <h1>Olá por aqui me avalie</h1>
        <label>Tipo de instituição</label>
        <select>
            <option>Semec</option>
            <option>Semed</option>
            <option>SMTT</option>
        </select>
        <label>Tipo de serviço</label>
        <select>
            <option>Marca serviço</option>
            <option>Pagamentos</option>
            <option>Abrir empresa</option>
        </select>
        <button onClick={toggle}>
          {!exibir? 'Começar' :  <UserAvaliacao />} 
            
        </button>

         
        </>
    )
}