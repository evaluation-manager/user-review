/** @format */

import React from "react";


import * as C from "./style";

function Card({name, themes, questions,value, handleChange }) {
  return (
    <C.Container>
      <div className="container-master">
      
        <div className="container">
          <h2 className="main-title" id={themes}  name={themes} value={value}>
            {themes}
            </h2>

          <div className="question">
           <p className="questions" id={questions} name={questions} value={value}>
            {questions}
            </p> 
            <div id="anwers-box">
              

             {/**   <h1
              className="btn-lette1"
             //  value={value} 
              // onChange={handleChange}
             // name={name}
            //  id={name}
              >
         {questions.map((questao)=>(
         <p value={questao.id} key={questao.id}>{questao}</p>
          ))

          }
              </h1>
               */}
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
