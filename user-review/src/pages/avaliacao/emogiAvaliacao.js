import React, { useState } from 'react';
import * as C from './style.js'
//import {ImHappy2, ImSad2} from 'react-icons/im';
import {BiHappyAlt,BiHappyBeaming,BiSad} from 'react-icons/bi'
//import { useNavigate } from 'react-router-dom';
export const UserAvaliacao=()=>{
    //funçaõ para levar o página de perguntas
    const [satisfeito, setSatisfeito]=useState(0);
    const [legal, setLegal]=useState(0);
    const [ruim, setRuim]=useState(0);
  //  const navigate=useNavigate();

    const handleSumit=(e)=>{
            e.preventDefault();
            //navigate('/step1');
    }
    //funçaõ para gerar qrecode
    //função para contar 
    return(
        <C.Container>
            <form onSubmit={handleSumit}>
        <div className='conteudo'>

            <div className='satisfeito'>
          <button onClick={()=>setSatisfeito(satisfeito+1)}>
           <BiHappyBeaming  size={100} style={{
           
              color:  "#ffffff",
              background : '#0000FF',
             padding:'10px'
              }}/>        
          </button>
           <p>Muito satisfeito</p>
           {satisfeito}
           </div>

           <div className='legal'> 
           <button onClick={()=>setLegal(legal+1)}>
            <BiHappyAlt size={100} style={{
                color:"#ffffff",
                background: '#00FF7F',
                padding:'10px'
            }}/>
            </button>
            <p>Legal</p>
            {legal}
            </div>

            <div className='ruim'>
                <button onClick={()=>setRuim(ruim+1)}>
            <BiSad size={100} style={{
                color:"#ffffff",
                background: '#FF0000',
                padding:'10px'
            }}/>
            </button>
            <p>Ruim</p>
            {ruim}
            </div>

            </div>
            </form>
        </C.Container>
    )
}