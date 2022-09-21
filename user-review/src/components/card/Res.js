
import React from "react";


import * as C from "./style";

function Res({name,value, text,onChange, opcoes }) {
  return (
    <C.Container>
      <div className="container" >
      <label htmlFor={name}>
      {text}:
    </label>
        <div  name={name}
          id={name}
          onChange={onChange}
          value={value}>

          <input  type={"radio"}  checked/>
        <label className="options">Escolha a opção</label>
    {opcoes.map((opcao)=>(   
      <div className="options">  
        
        <input key={opcao.id}
          value={opcao.id}
          type={"radio"}  
        />
        
        <label >
            {opcao.name}
            </label>
            </div>
    ))}
          </div>
     </div>
    </C.Container>
  );
}

export default Res;
