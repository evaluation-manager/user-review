import {  useEffect, useState } from 'react';

import Submit from '../../components/button/Submit';
import  * as C from  './style';
import Res from '../../components/card/Res';
import { useNavigate } from 'react-router-dom';


export const InfoAvalicao=()=>{
   //  const url= 'http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services' 
   //  const urlQ= 'http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions/answers'
  //   const urlA= 'http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes'

     const url="http://localhost:5000/services";
     const urlQ="http://localhost:5000/questions";
   const urlA="http://localhost:5000/avaliacoes";

       const [servico, setServico]=useState([]);
       const [question, setQuestion]=useState([]);
       //const [answers, setAnswers]=useState([]);
  
//enviando para o post
const [service_id,setService_id]=useState("");
const [question_id, setQuestion_id]=useState("");
const [answer_id, setAnswers_id]=useState("");

const navigate=useNavigate()


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
    
    fetchDataQuestion()
 
},[])


    const handleSumit=async(e) =>{
        e.preventDefault();
       // navigate("/grades");
       
      const avaliacao={
        service_id:service_id,
        question_id:question_id,
        answer_id:answer_id
      }

     const res = await fetch(urlA, {
        method: "POST",
       headers: { "Content-Type": "application/json" },
        body: JSON.stringify(avaliacao)
      });
      //teste()
      
    }

  function handleValue(id) {
  // console.log("oi")
setQuestion_id(id)
  //
  }

    return (
        <C.Container>
     
        <form onSubmit={handleSumit}>
     <div className='survey'> 
  
          
          {question.map((pergunta) =>
            <>
            <p>tema</p>
              <span value={pergunta.id}
                key={pergunta.id}>
                {pergunta.name}
              </span>
              <Res              
          
           opcoes={pergunta.answers}
           name="answer_id"
            value={answer_id}
          onChange={(e) => setAnswers_id(e.target.value)}

          />
            
            </>

          )}
             <Submit
             //   name="question_id"
              //  value={question_id}
                onClick={() => handleValue()}
                text="Confirmar" />
          </div>  
        
        </form>
      

        </C.Container>

    )
}
