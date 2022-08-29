import React from 'react';
import * as C from './style.js'
//import {ImHappy2, ImSad2} from 'react-icons/im';
import {BiHappyAlt,BiHappyBeaming,BiSad} from 'react-icons/bi'

export const UserAvaliacao=()=>{
    //função para contar 
    return(
        <C.Container>
        <div className='conteudo'>

            <div className='satisfeito'>
          <button>
           <BiHappyBeaming  size={100} style={{
           
              color:  "#ffffff",
              background : '#0000FF',
             padding:'10px'
              }}/>        
          </button>
           <p>Muito satisfeito</p>
           {0}
           </div>

           <div className='legal'> 
           <button>
            <BiHappyAlt size={100} style={{
                color:"#ffffff",
                background: '#00FF7F',
                padding:'10px'
            }}/>
            </button>
            <p>Satisfeito</p>
            {0}
            </div>

            <div className='ruim'>
                <button>
            <BiSad size={100} style={{
                color:"#ffffff",
                background: '#FF0000',
                padding:'10px'
            }}/>
            </button>
            <p>Ruim</p>
            {0}
            </div>

            </div>
        </C.Container>
    )
}