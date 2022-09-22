
import React from "react";


import * as C from "./style";

function Res({name,value, text,onClick, opcoes }) {
  return (
    <C.Container>
      <div className="container" >
      <label htmlFor={name}>
      {text}:
    </label>
        <div  name={name}
          id={name}
          onClick={onClick}
          value={value}>

    {opcoes.map((opcao)=>(   
              
        <button key={opcao.id}
          value={opcao.id}>
          {opcao.name}
        </button>
          
    ))}
          </div>
     </div>
    </C.Container>
  );
}

export default Res;
