import React from 'react';

import  * as C from  './style';

function Card({ themes, questions,answers}) {
     //funçaõ para mostrar que foi registrado
    
    return (
        <C.Container>
            <div className='container-master'>
                {
                }
            <div id="container"> 
     {/*aqui é o titulo */}
     {themes.map((theme)=>(
        <h2 id="main-title" value={theme.id} key={theme.id}>
            {theme.name}
        </h2>
     ))}
            
            </div>

            <div id="question">

{questions.map((question)=>(
   
 <p id='questions' value={question.id} key={question.id}>
    {question.name} - {question.theme_id}
 </p>

))}
              {/*aqui são asa alternativas  */}
            <div id="anwers-box">
            {answers.map((answer)=>(
            <button className='btn-lette1'>          
                {answer.name}
             </button>
            ))}

          
            </div>
           
            </div>
            {/*aqui é o fim */}
            </div>
        </C.Container>
    )
}

export default Card;