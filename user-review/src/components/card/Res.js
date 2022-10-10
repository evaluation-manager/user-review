
import React from "react";


import * as C from "./style";

function Res({name,value, onChange, opcoes, handleClick }) {
  return (
    <C.Container>
<div className="container">	    

<input type="radio"  />
 <label>teste</label>
    {opcoes.map((opcao, index)=>(  
      <>
     
      <div className="options">  
    
        <input
         key={index}
          value={opcao.id}
          type="radio"  
         name={opcao.name}
        //  onChange={onChange}
     
        />

        <label>
            {opcao.name}	           
            </label>	    

            </div>
            </>
      )) }	   

          </div>
         
    </C.Container>
  );
}

export default Res;
/**
 <input
 type="radio" 
id={name}
value={value}
name={name}
onChange={onChange}
 />
 */