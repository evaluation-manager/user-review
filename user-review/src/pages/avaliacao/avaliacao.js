import React from 'react';
import {UserAvaliacao} from './userAvaliacao'
import { useState } from 'react';
import Select from '../../components/select/Select';
import Submit from '../../components/button/Submit';
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
       

       <Select 
       text="Tipo de instituição"
        name="select"

        />
        <Select 
       text="Tipo de Serviço"
        name="select"

        />
        
      
       {/*  <select>
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
        */}

        <Submit text="Começar" handleButton={toggle}>
            
      {/*!exibir?  */}     
            
        </Submit>

        <UserAvaliacao />
        </>
    )
}