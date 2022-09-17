import React from 'react';
import  * as C from  './style';
//import {Link} from 'react-router-dom';

//criando o compoenet de botão 
function Submit({ text, onClick}) {
  return (
    <C.Container>
    
    <button onClick={onClick}>
    {text}
    </button>
   
      </C.Container>
  )
}
export default Submit;