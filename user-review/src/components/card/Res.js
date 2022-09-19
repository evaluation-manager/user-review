
import { type } from "@testing-library/user-event/dist/type";
import React from "react";


import * as C from "./style";

function Res({name,value, text,onChange, opcoes }) {
  return (
    <C.Container>
      <div className="container">
      <label htmlFor={name}>
      {text}:
    </label>

    {opcoes.map((opcao)=>(   

        <label key={opcao.id} value={opcao.id}>
            {opcao.name}
            </label>

      )) }
          

     </div>
    </C.Container>
  );
}

export default Res;
