import React from 'react';
import Submit from '../../components/button/Submit';
import * as C from "./style";
export const Thanks =()=>{
    return(
        <C.Container>
        <h2>Obrigado por participar</h2>
        <span>Caso queira fazer uma avalição novamente</span>
        <Submit  text="Refazer"/>
        </C.Container>
    )
}