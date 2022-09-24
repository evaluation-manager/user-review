import React, { useEffect, useState } from 'react';
import * as C from './style.js'
import Submit from '../../components/button/Submit';

import Select from '../../components/select/Select';
import {BiHappyAlt,BiHappyBeaming,BiSad} from 'react-icons/bi'
import { Link } from 'react-router-dom';
export const UserAvaliacao = () => {
//const url="http://localhost:5000/notas"
  const url="http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/grades";
   //const urlO="http://localhost:5000/organs";
   const urlO="http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/organs";
    //funçaõ para levar o página de perguntas

const [organ, setOrgan]=useState([]);
const [organ_id,setOrgan_id]=useState("");
const [grades,setGrades]=useState("");
  
//testes
const [notas,setNotas]=useState([])

 useEffect(()=>{
    async function fetchDataOrgans(){
    const res=await fetch(urlO);
    const data=await res.json();
    setOrgan(data);
    }
    fetchDataOrgans();

  async function fetchDataNotas(){
        const res=await fetch(url);
        const data=await res.json();
        setNotas(data);
        }
        fetchDataNotas();
        
}, []);

    const handleSumit=async(e)=>{
       e.preventDefault();
            
         const gradess={
          organ_id,
          grades
           
           }
            
         const req = await fetch(url, {
            method: "POST",
         // headers: { "Content-Type": "application/json" },
            body: JSON.stringify(gradess)
          });
    
      const addNotas = await req.json();
      //carregamento de forma dinamica
      setNotas((prevOrgans) => [...prevOrgans, addNotas])
  }
  
  const status1 = () => {
    setGrades(5)
  }
  const status2=()=>{
    
    setGrades(3)
  }
  const status3=()=>{
   
    setGrades(1)
  }

    //funçaõ para gerar qrecode
    //função para contar 
  let teste = notas.map((nota) => (
    nota.grades
  ))
  
  function bigsatisfeito(value){
    return value === 5;
  }
  function biglegal(value){
    return value === 3;
  }
  function bigruim(value){
    return value === 1;
  }
  let filtlegal = teste.filter(biglegal)
  let filtsatisfeito = teste.filter(bigsatisfeito)
  let filtlruim = teste.filter(bigruim)
  //console.log("oi", filtlruim );

    return(
        <C.Container>
<form onSubmit={handleSumit}>
          <div>
            <Select 
            options={organ}
            text="Escolha um orgão para avaliar"
            value={organ_id}
            name="organ_id"
            onChange={(e)=>setOrgan_id(e.target.value)}
            />
         
          <div className='conteudo'>
            <div className='satisfeito'>
        <button name="grades" 
                value={grades}
                onClick={status1}
          >

        <BiHappyBeaming  size={100} style={{
              color:  "#ffffff",
              background : '#0000FF',
             padding:'10px'
              }}/>   
                <p>Satisfeito {filtsatisfeito.length }</p>    
              </button>
            </div>
            
            <div className='legal'> 
           <button name="legal" 
          value={grades}  onClick={status2}>
                  
            <BiHappyAlt size={100} style={{
                color:"#ffffff",
                background: '#00FF7F',
                padding:'10px'
                }} />
                 <p>Legal  {filtlegal.length } </p> 
            </button>      
           
          </div>

          <div className='ruim'>
          <button name="ruim" 
                value={grades}
                onClick={status3}>      
          
          <BiSad size={100} style={{
              color:"#ffffff",
              background: '#FF0000',
              padding:'10px'
                }} />  
                <p>Ruim { filtlruim.length}</p>      
              </button>
              
        </div>
        </div>
      
          </div>
          </form>
         <div className='qrcode'>
            <div className='qrcode-msg'>
            <span>Para responder do celular acesse o qrcode ou clique em responder </span>
            </div>
        
            <Submit text="Acessar qrcode" />
   
    
            </div>
         <Link to="/survey">Responder</Link>
        </C.Container>
    )
}