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
            <h2 id="main-title" >{themes}</h2>
     {/*aqui é o titulo */}
     {/*themes.map((theme)=>(
        <h2 id="main-title" value={theme.id} key={theme.id}>
            {theme.name} 
        </h2>
     ))*/}
            
          

            <div id="question">


   
 <p id='questions' >
    {questions}
 </p>

              {/*aqui são asa alternativas  */}
            <div id="anwers-box">
                            <button className='btn-lette1' >{answers}</button>
                            <button className='btn-lette1' >{answers}</button>

            {/*answers.map((answer)=>(
            <button className='btn-lette1'>          
                {answer.name}
             </button>
            ))*/}

          
            </div>
           
            </div>
            {/*aqui é o fim */}
            </div>
            </div>
        </C.Container>
    )
}

export default Card;