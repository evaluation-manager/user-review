import React from 'react';
import  * as C from  './style';
//import {Link} from 'react-router-dom';

//criando o compoenet de botão 
function Submit({text, handleButton }) {
  return (
    <C.Container>
    
    <button onClick={handleButton}>
    {text}
    </button>
   
      </C.Container>
  )
}
export default Submit;