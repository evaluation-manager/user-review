import React, { useEffect, useState } from 'react';
import * as C from './style.js'

import Select from '../../components/select/Select';
import {BiHappyAlt,BiHappyBeaming,BiSad} from 'react-icons/bi'
//import { useNavigate } from 'react-router-dom';
export const UserAvaliacao=()=>{
    const url="http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/grades";
    //const urlO="http://localhost:5000/organs";
    const urlO="http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/organs";
    //funçaõ para levar o página de perguntas
//const [notas,setNotas ]=useState([]);
const [organ, setOrgan]=useState([]);
const [organ_id,setOrgan_id]=useState("");
//const [grades,setGrades]=useState(1);
  
//testes
const [teste,setTeste]=useState([1,3,5])

useEffect(()=>{
    async function fetchDataOrgans(){
    const res=await fetch(urlO);
    const data=await res.json();
    setOrgan(data);
    }
    fetchDataOrgans();

  /*async function fetchDataNotas(){
        const res=await fetch(url);
        const data=await res.json();
        setNotas(data);
        }
        fetchDataNotas();
        */
}, []);

    const handleSumit=async(e)=>{
            e.preventDefault();

           // navigate('/step1');
            
         const notas={
            
          grades:
            organ_id
           }
            
           // console.log(satisfeito)
            
         const res = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(notas)
          });
          //console.log(organ_id)
    }
    function status(){
      //console.log(teste[0])
    }

    //funçaõ para gerar qrecode
    //função para contar 
   // console.log(teste[0])
    return(
        <C.Container>

          <>
            <Select 
            options={organ}
            text="Escolha um orgão para avaliar"
            value={organ_id}
            name="organ_id"
            onChange={(e)=>setOrgan_id(e.target.value)}
            />
         
        <div className='conteudo'>
        <button name="grades" 
                value={teste[0]}
          >

        <BiHappyBeaming  size={100} style={{
              color:  "#ffffff",
              background : '#0000FF',
             padding:'10px'
              }}/>   
                      
              </button>

            <div className='legal'> 
           <button name="legal" 
          value={teste[1]}
        
          >
            <BiHappyAlt size={100} style={{
                color:"#ffffff",
                background: '#00FF7F',
                padding:'10px'
            }}/>
            </button>      
        
          </div>

          <div className='ruim'>
          <button name="ruim" 
          value={teste[2]}
          >      
          
          <BiSad size={100} style={{
              color:"#ffffff",
              background: '#FF0000',
              padding:'10px'
          }}/>      
</button>
</div>
        </div>
      

</>
          
        </C.Container>
    )
}

{/*
 
          </div>
      

*/}