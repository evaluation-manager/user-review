
import React from "react";


import * as C from "./style";

function Res({name,value, text, onChange, opcoes }) {
  return (
    <C.Container>
<div className="container">	    
        <div  name={name}
          id={name}
          onChange={onChange}
          value={value}>
          <div className="labelV">
          <input  type={"radio"}  defaultChecked/>
          <label >Escola a opção</label>
          </div>
    {opcoes.map((opcao)=>(  

      <div className="options">  
        <label />	
        <input key={opcao.id}
          value={opcao.id}
          type={"radio"}  
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
