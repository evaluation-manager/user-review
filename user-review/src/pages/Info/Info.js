import { useEffect, useState } from 'react';


import Select from '../../components/select/Select';
import Submit from '../../components/button/Submit';
import {UserAvaliacao} from '../avaliacao/emogiAvaliacao'
import  * as C from  './style';
//import { Pergunta } from './Perguntas';


export const InfoAvalicao=()=>{
      const url= 'http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services' 
        const urlQ= 'http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions'
      const urlR= 'http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/answers'

      //const url="http://localhost:5000/services";
      //const urlQ="http://localhost:5000/questions";
      //const urlR="http://localhost:5000/answers";
//const urlA="http://localhost:5000/avaliacoes";
const urlA="http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes"
      //o que vai receber
const [avaliacoes,setAvaliacoes]=useState([]);

       //const [exibir, setExibir]=useState(true);
       const [servico, setServico]=useState([]);
       const [question, setQuestion]=useState([]);
       const [answers, setAnswers]=useState([]);

//enviando para o post
const [service_id,setService_id]=useState("");
const [question_id, setQuestion_id]=useState("");
const [answer_id, setAnswers_id]=useState("");

useEffect(()=>{
   async function fetchDataSevice(){
    const res=await fetch(url);
    const data=await res.json();
    setServico(data);

   }
   fetchDataSevice();
   
   async function fetchDataQuestion(){
    const res=await fetch(urlQ);
    const data=await res.json();
    setQuestion(data);

   }
   fetchDataQuestion();
   async function fetchDataAnswer(){
    const res=await fetch(urlR);
    const data=await res.json();
    setAnswers(data);

   }
   fetchDataAnswer();
},[])


    const handleSumit=async(e) =>{
        e.preventDefault();
      const avaliacao={
        service_id:service_id,
        question_id:question_id,
        answer_id:answer_id
      }

      const res = await fetch(urlA, {
        method: "POST",
        //headers: { "Content-Type": "application/json" },
        body: JSON.stringify(avaliacao)
      });

            const addAvaliacoes = await res.json();
    //carregamento de forma dinamica
    setAvaliacoes((prevAvaliacoes) => [...prevAvaliacoes, addAvaliacoes])
    }

    return (
        <C.Container>
               <h1>Avalie nossos serviços</h1>     
     
       <form onSubmit={handleSumit}>
       

         <Select 
        text="Serviço"
        name="servico_id"
        onChange={(e) => setService_id(e.target.value)}
        options={servico}      
        value={service_id}
        />
           <Select 
        text="Pergunta"
        name="question_id"
        onChange={(e) => setQuestion_id(e.target.value)}
        options={question}      
        value={question_id}
        />
           <Select 
        text="Resposta"
        name="answer_id"
        onChange={(e) => setAnswers_id(e.target.value)}
        options={answers}      
        value={answer_id}
        />
            <Submit text="Confirmar"/>
           
    <UserAvaliacao/> 
           
     
        </form>
       

       {/* <div className='qrcode'>
            <div className='qrcode-msg'>
            <span>Para responder do celular acesse o qrcode ou clique em responder </span>
            </div>
        
            <Submit text="Acessar qrcode" />
   
    
            */}
             
        </C.Container>

    )
}