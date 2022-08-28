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

            </div>

            
            <div id="anwers-box">
            <button>
                <span className='btn-lette'>{btnletter1}</span>
                <span className='btn-lette'>{btnletter2}</span>
            </button>
            </div>
        </C.Container>
    )
}

export default Card;