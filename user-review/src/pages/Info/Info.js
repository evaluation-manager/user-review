import {  useEffect, useState } from 'react';

import Submit from '../../components/button/Submit';
import  * as C from  './style';
import Res from '../../components/card/Res';
import { useParams } from 'react-router-dom';
import { Comments } from './comments';

export const InfoAvalicao=()=>{
  
  // const urlA= "http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes"
     const urlA="http://localhost:5000/avaliacoes";
  
    const [theme, setTheme]=useState([]);
    const [totlle, setToglle]=useState(true);
 // const [avaliacoes,setAvaliacoes]=useState([])
//enviando para o post
const {id}=useParams();
const [question_id, setQuestion_id]=useState("");
const [answer_id, setAnswers_id]=useState("");
const [grades_id]=useState(id);


 useEffect(()=>{

   const getThemeQuestions= async()=>{
  await fetch('http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes/questions/'+id)
       // await fetch('http://localhost:5000/themes/'+id) 
     .then((Response)=>Response.json())
     .then((ResponseJson)=>(
      //console.log(ResponseJson)
     setTheme(ResponseJson)
     ))
    }
    
    getThemeQuestions()
    
},[id])

    const handleSumit=async(e) =>{
        e.preventDefault();
//let convertQuestion=question_id.toString()

     const avaliacao={
      
        question_id:  question_id,
        answer_id:answer_id,
        grades_id:grades_id
      }

    const res = await fetch(urlA, {
        method: "POST",
       headers: { "Content-Type": "application/json" },
        body: JSON.stringify(avaliacao)
      });
     
    }

  function handleValue(id) {
 //console.log(id)
setQuestion_id(id)
   //handlecolor()
  
  }

  function AtualizarToglles(){
    setToglle(false)
    
  
  }
function handlecolor(color, id){
//console.log(background:"#fff")
//handleValue()
}

    return (
        <C.Container>
     {totlle===false ?
      <Comments grades={grades_id}/> :
        <form onSubmit={handleSumit}>
     <div className='survey'> 
  
      {theme.map((tema, index) =>
            <>
              <span 
              value={tema.id}
                key={index}>
                {tema.name}
              </span>

        {tema.questions.map((respostas,index)=>
            <div className='Questions'>

         <h2 
        onChange={e=>setQuestion_id(respostas.id)}
         name="question_id" key={index}>
          {respostas.name}
          </h2>

          <div className='respostas'>
          {respostas.answers.map((resposta, index)=>
          <>

          <input 
          name="answer_id" 
          key={index} 
          value={answer_id}
          type={"radio"}  
          
          onChange={e=>setAnswers_id(resposta.id)}
          />

          <label >
             {resposta.name} 
             </label>
            
   </>
   
          )}
    
   </div> 
   <Submit
    onClick={() => handleValue(respostas.id )}
    text="Enviar" />
              
         </div>
         )}
</>
          )}         
            
          </div>  
          <Submit
               // onClick={AtualizarToglles}
             //onClick={handleValue}
                text="Finaalizar"  />
        </form>

         }

        </C.Container>

    )
}
/**value={answer_id}
 * onChange={e=>setQuestion_id("oi")}
     // name="answer_id"
      // opcoes={respostas.answers}
      // onChange={(e)=>setAnswers_id(e.target.value)}
        <Submit
    //onClick={() => handleValue(respostas.id )}
    text="Enviar" />
      
      */