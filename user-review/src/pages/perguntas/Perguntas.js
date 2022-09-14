/** @format */

import React, { useEffect, useState } from "react";
import * as C from "./style";

import Submit from "../../components/button/Submit";
import Card from "../../components/card/Card";

export const Pergunta = ({ BtnText,handleSubmit }) => {
  const [questions, setQuestions]=useState([]);
  const [theme, setTheme] = useState([]);
  //const [answers, setAnswers]=useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/themes",{
   // fetch("http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes/questions",{
      })
      .then((resp) => resp.json())
      .then((data) => {
        setTheme(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function respsotasSvale(e) {
    e.preventDefault();
    
   //console.log("Respostas preenchidas");
    // console.log()
    handleSubmit(questions)
    
  }

  function handleChange(e) {
    setQuestions({ ...questions, [e.target.name]: e.target.value})
       
        }
       console.log(theme)
      /* for(let i =0; i<theme.length; i++){

       }*/
  return (
    <C.Container>
      <h2>Sua resposta vai ajudar a melhorar nossos serviços</h2>

      <p>Deseja colaborar com algumas mais informações?</p>
      <form onSubmit={respsotasSvale}>
        {/* {temas.map((testes)=>(
        
            <Card 
            name={Card}
              themes={testes.name}
              questions={testes.name}
             answers={testes.id}
            //value={}
           // handleChange={create}
             />
        
        )) }
      
             */}
        <Card 
        type="text"
        themes="testes"
         questions="perguntas"
          answers="opções"
          name="questions"
          handleChange={handleChange}
         value={questions.name ? questions.id:''}
          />
          
        <Submit text={BtnText} />
      </form>

    </C.Container>
  );
};
