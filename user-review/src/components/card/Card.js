/** @format */

import React from "react";


import * as C from "./style";

function Card({name, themes, questions,value, onChange }) {
  return (
    <C.Container>
      <div className="container">
        <p>{themes}</p>
     <p >{questions}</p>
     
     </div>
    </C.Container>
  );
}

export default Card;
