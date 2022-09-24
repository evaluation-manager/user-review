import React from 'react';
import  * as C from  './style';
//import {Link} from 'react-router-dom';

//criando o compoenet de botão 
function Submit({ text, name,onClick}) {
  return (
    <C.Container>
    
    <button name={name} onClick={onClick}>
    {text}
    </button>
   
      </C.Container>
  )
}
export default Submit;