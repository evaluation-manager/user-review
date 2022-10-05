import {  useEffect, useState } from 'react';

import Submit from '../../components/button/Submit';
import  * as C from  './style';
import Res from '../../components/card/Res';
import { useParams } from 'react-router-dom';
import { UserAvaliacao } from '../avaliacao/emogiAvaliacao';
import { Comments } from './comments';

export const InfoAvalicao=()=>{
  
     const urlA= 'http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes/questions'
  //   const urlA= 'http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes'

    // const urlQ="http://localhost:5000/questions";
   //const urlA="http://localhost:5000/themes";
    const [theme, setTheme]=useState([]);
    const [question, setQuestion]=useState([]);
    const [totlle, setToglle]=useState(true);
    //const [totlleComents, setToglleComents]=useState(true)
       //const [answers, setAnswers]=useState([]);
  
//enviando para o post

const [question_id, setQuestion_id]=useState("");
const [answer_id, setAnswers_id]=useState("");
const [grades_id, setGrades_id]=useState("");

const {id}=useParams();

 useEffect(()=>{

   const getThemeQuestions= async()=>{
  await fetch('http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes/questions/'+id)
     //   await fetch('http://localhost:5000/themes/'+id) 
     .then((Response)=>Response.json())
     .then((ResponseJson)=>(
      //console.log(ResponseJson)
     setTheme(ResponseJson)
     ))
    }
    
    getThemeQuestions()
 
},[id])
//console.log("oi", theme)

    const handleSumit=async(e) =>{
        e.preventDefault();
       // navigate("/grades");
       
     const avaliacao={
       grades_id:grades_id,
        question_id:question_id,
        answer_id:answer_id
      }

  /*   const res = await fetch(urlA, {
        method: "POST",
       //headers: { "Content-Type": "application/json" },
        body: JSON.stringify(avaliacao)
      });*/
      //teste()
      
    }

  function handleValue(id) {
 console.log(id)
//setQuestion_id(id)
  //
  }
  function AtualizarToglles(){
    setToglle(false)
    
    //setToglleComents(true)
  }

    return (
        <C.Container>
     {totlle===false ?
      <Comments grades={grades_id}/> :
        <form onSubmit={handleSumit}>
     <div className='survey'> 
  
          {/*temas */}
      {theme.map((tema) =>
            <>
            
              <span value={tema.id}
                key={tema.id}>
                {tema.name}
              </span>

        {tema.questions.map((respostas)=>
            <>
         <h2 
         onChange={e=>setQuestion_id(e.target.value)} 
         name="question_id">
          {respostas.name}
          </h2>
         <Res
         value={answer_id}
         name="answer_id"
          opcoes={respostas.answers}
          onChange={(e)=>setAnswers_id(e.target.value)}
          />
         </>
         )}
 
         <Submit
                onClick={() => handleValue()}
                text="Enviar" />
              
</>
          )}         
            
          </div>  
          <Submit
                onClick={AtualizarToglles}
                text="Confirmar"  />
        </form>

         }

        </C.Container>

    )
}
   // opcoesQuestions={tema.questions}
           // opcoesRespostas={tema.questions}
            