import {  useEffect, useState } from 'react';

import Submit from '../../components/button/Submit';
import  * as C from  './style';
import Res from '../../components/card/Res';
import { useParams } from 'react-router-dom';

export const InfoAvalicao=()=>{
  
     const urlQ= 'http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes/questions'
  //   const urlA= 'http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes'

    // const urlQ="http://localhost:5000/questions";
  // const urlA="http://localhost:5000/avaliacoes";
    const [theme, setTheme]=useState([]);
    const [question, setQuestion]=useState([]);
       
       //const [answers, setAnswers]=useState([]);
  
//enviando para o post

const [question_id, setQuestion_id]=useState("");
//const [answer_id, setAnswers_id]=useState("");


const {id}=useParams();

 useEffect(()=>{

   const getThemeQuestions= async()=>{
     await fetch('http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes/questions/'+id)
     
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
       
     const avaliacao=
       //:service_id,
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
  
          {/*temas */}
      {theme.map((tema) =>
            <>
            
              <span value={tema.id}
                key={tema.id}>
                {tema.name}
              </span>

        {tema.questions.map((respostas)=>
            <>
         <h2>{respostas.name}</h2>
         <Res opcoes={respostas.answers}/>
         </>
         )}
        
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
   // opcoesQuestions={tema.questions}
           // opcoesRespostas={tema.questions}
            