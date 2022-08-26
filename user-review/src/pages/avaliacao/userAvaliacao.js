import React from 'react';
import * as C from './style.js'
//import {ImHappy2, ImSad2} from 'react-icons/im';
import {BiHappyAlt,BiHappyBeaming,BiSad} from 'react-icons/bi'
export const UserAvaliacao=()=>{
    return(
        <C.Container>
        <div className='conteudo'>

            <div className='satisfeito'>
          <button>
           <BiHappyBeaming  size={100} style={{
           
              color:  "#ffffff",
              background : '#0000FF',
             padding:'5px'
              }}/>
          
          </button>
           <p>Muito satisfeito</p>
           </div>

           <div className='legal'> 
           <button>
            <BiHappyAlt size={100} style={{
                color:"#ffffff",
                background: '#00FF7F',
                padding:'5px'
            }}/>
            </button>
            <p>Legal</p>

            </div>

            <div className='ruim'>
                <button>
            <BiSad size={100} style={{
                color:"#ffffff",
                background: '#FF0000',
                padding:'5px'
            }}/>
</button>
            <p>Ruim</p>
            </div>

            </div>
        </C.Container>
    )
}