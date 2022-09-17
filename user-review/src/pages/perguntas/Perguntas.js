/** @format */
import * as C from "./style";
import React, { useEffect,  useState } from "react";

import Submit from "../../components/button/Submit";
import Card from "../../components/card/Card";
//import { useContext } from "react";
//import { QuestionsContext } from "../../context/Questions";

export const Pergunta = () => {
  const url ="http://localhost:5000/themes"
const [themes, setThemes] = useState([])

 useEffect(() => {
    async function fetchData() {
        const res = await fetch(url);
        const data = await res.json();
        setThemes(data);
    }
    fetchData();
  
    
      
 }, [])
  
  const questionI = themes.map((questao) =>(
  questao.question
  ))



const questaoName=questionI.map((dado)=>(
dado[0].name
))
  const teste = questaoName.sort()
  

 console.log(teste)

      const answerI=questionI.map((dado)=>(
        dado[0].anwers
      ))
  
///console.log(answerI[0] )

  
  return (
    <C.Container>
      <h2>Sua resposta vai ajudar a melhorar nossos serviços</h2>

      <p>Deseja colaborar com algumas mais informações?</p>
      <p>Voce esta {0+1} Quantidade de questões {questaoName.length}</p>
      <p>Questao:{questaoName[0]} </p>
 

      {answerI[0].map((teste) => (
        <p key={teste.id}>{teste.name}</p>
        ))}
      
      <Submit text="Próximo"
       
        />
        
    </C.Container>
  );
};
/*
  //const [questionState,dispath]= useContext(QuestionsContext);
 /// console.log(questionState)    
let temas=[];
          let questoes=[];
          //let avaliacoes=[]
          //console.log(themes)
        for(let i=0; i<theme.length; i++){
           //console.log(i,theme[i].id);
            temas.push(theme[i])
            const question=theme[i].questions;
           // console.table(question)
           for(let j=0; j<question.length; j++){
           // console.log(question[j].id)
            questoes.push(question[j])
           // avaliacoes.push(theme[i].name, "sou a perguntas:"+ question[j].name)
           }
           
        }
//console.log(typeof(avaliacoes))
   // console.log(questoes)
       */

     /*function handleChange(e) {
    setQuestions({ ...questions, [e.target.name]: e.target.value})
       
        }*/