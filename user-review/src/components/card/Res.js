
import React from "react";


import * as C from "./style";

function Res({name,value, onChange, opcoes, handleClick }) {
  return (
    <C.Container>
<div className="container">	    
        <div 
          id={name}
          onChange={onChange}
          onClick={handleClick}
          value={value}
          >
          <div className="labelV">
          <input  type={"radio"} />
          <label  defaultChecked>Escola a opção</label>
          </div>
    {opcoes.map((opcao)=>(  

      <div className="options">  
        <label />	
        <input key={opcao.id}
          value={opcao.id}
          type={"radio"}  
          name={opcao.name}
        />

        <label >
            {opcao.name}	           
            </label>	    

            </div>
      )) }	   

          </div>
          </div>
    </C.Container>
  );
}

export default Res;
