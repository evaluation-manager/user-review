import React from 'react';
import { Pergunta } from './Perguntas';

export const Cadastrar=()=>{
    function create(question){

    //fetch('http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/avaliacoes',{
        fetch('http://localhost:5000/avaliacoes', {
            method: 'POST',
           
            body: JSON.stringify(question)
        })
    }

    return(
        <>
<Pergunta
handleSubmit={create}
 BtnText="Confirmar"/>
        </>

    )
}