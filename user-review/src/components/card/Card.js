/** @format */

import React from "react";

import * as C from "./style";

function Card({name, themes, questions, answers, type,value, handleChange, }) {
  return (
    <C.Container>
      <div className="container-master">
        {}
        <div id="container">
          <h2 id="main-title">{themes}</h2>

          <div id="question">
            <p id="questions">{questions}</p>
            <div id="anwers-box">
              <input type={type}
              className="btn-lette1"
               value={value} 
               onChange={handleChange}
              answers= {answers}
              name={name}
              />
               
            </div>
            {/*aqui são asa alternativas  */}
          </div>
          {/*aqui é o fim */}
        </div>
      </div>
    </C.Container>
  );
}

export default Card;
