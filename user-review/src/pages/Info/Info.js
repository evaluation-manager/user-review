import {  useEffect, useState } from 'react';


import Select from '../../components/select/Select';
import Submit from '../../components/button/Submit';
import  * as C from  './style';
import Res from '../../components/card/Res';

export const InfoAvalicao=()=>{
     // const url= 'http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services' 
     // const urlQ= 'http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions/answers'
    //  const urlA= 'http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes'

     const url="http://localhost:5000/services";
     const urlQ="http://localhost:5000/questions";
   const urlA="http://localhost:5000/avaliacoes";

      //o que vai receber
//const [avaliacoes,setAvaliacoes]=useState([]);

       //const [exibir, setExibir]=useState(true);
       const [servico, setServico]=useState([]);
       const [question, setQuestion]=useState([]);
       //const [answers, setAnswers]=useState([]);
const [currenteQuestion,seTcurrenteQuestion]=useState(0)
  
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
       headers: { "Content-Type": "application/json" },
        body: JSON.stringify(avaliacao)
      });
      //teste()
      
    }

  function handleValue(id) {
  // console.log("oi")
setQuestion_id(id)
  // console.log(id)
  /*  const next = currenteQuestion + 1;

    if (next < question.length) {
      seTcurrenteQuestion(next)
    }*/
  }

    return (
        <C.Container>
     
        <form onSubmit={handleSumit}>
     <div className='survey'> 
         <Select 
        text="Serviço"
        name="servico_id"
        onChange={(e) => setService_id(e.target.value)}
        options={servico}      
        value={service_id}
        />
        
          
          {question.map((pergunta) =>
            <>
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
              <Submit
             //   name="question_id"
              //  value={question_id}
                onClick={() => handleValue(pergunta.id)}
                text="Confirmar" />
            </>
          )}
           
         </div>  
        </form>
    
        
        </C.Container>

    )
}
