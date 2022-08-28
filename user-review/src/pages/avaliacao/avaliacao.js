import React from 'react';
import {UserAvaliacao} from './emogiAvaliacao'
import { useState } from 'react';
import Select from '../../components/select/Select';
import Submit from '../../components/button/Submit';
import Card from '../../components/card/Card';
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
        
            <Submit text={!exibir ? "Começar" : <UserAvaliacao />}
                handleButton={toggle}/>
           {/*Só pretendo mostrar apos a escolha da instuição */}      
            <Card
                text="Sobre o atendimento"
                questions="Voce considera um bom atendimento?"
                btnletter1="Sim"
                btnletter2="Não"
            />

            <Card
                text="Sobre o tempo de espera"
                questions="Considera aceitavel?"
                btnletter1="Sim"
                btnletter2="Não"
            />
        </>

    )
}