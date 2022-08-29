import React from 'react';
import  * as C from  './style';

function Card({ text, questions,btnletter1,btnletter2}) {
    return (
        <C.Container>
            <div id="container"> 
     
            <h2 id="main-title">{text}</h2>
            </div>

            <div id="question">
            <p id='questions'>{questions}</p>

            
            <div id="anwers-box">
            <button className='btn-lette1'>
              
                    {btnletter1}
                    </button>
                    <button className='btn-lette2'>
      
                    {btnletter2}
                   
                    </button>
            </div>
            </div>
        </C.Container>
    )
}

export default Card;