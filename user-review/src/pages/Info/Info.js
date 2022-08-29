import React from 'react';
//import {UserAvaliacao} from '../emogiAvaliacao'
import { useState } from 'react';
import Select from '../../components/select/Select';
import Submit from '../../components/button/Submit';
import {UserAvaliacao} from '../avaliacao/emogiAvaliacao'
import  * as C from  './style';

export const InfoAvalicao=()=>{
    //gerar qrcode
//rendeizar teste apenas se o usuairo informar a secretaria
const [exibir, setExibir]=useState(false);

function toggle(){
//console.log("oi");
setExibir(!exibir);

}

    return (
        <C.Container>
       
       <div className='container'>
        <h1>Avalie nossos serviços</h1>
       <div className='container-select'>
       <Select 
       text="Orgão"
        name="select"
        value=""
        />
         <Select 
        text="Serviço"
        name="select"
        value=""
        />
         <Select 
        text="Tema"
        name="select"
        value=""
        />
            <Submit text={!exibir ? "Confirmar" : "Responder perguntas"}
                handleButton={toggle}/>
           {/*Só pretendo mostrar apos a escolha da instuição <UserAvaliacao  */}      
       </div>
       </div>

      <div>
      <UserAvaliacao/>
      </div>    

        <div className='qrcode'>
            <div className='qrcode-msg'>
            <span>Para acessar do celular</span>
            </div>
          <Submit text="Acessar qrcode"/>
          </div>
        </C.Container>

    )
}