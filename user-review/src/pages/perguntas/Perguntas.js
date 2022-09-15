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
    //fetch("http://localhost:5000/themes",{
    fetch("http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes/questions",{
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
    


    
  return (
    <C.Container>
      <h2>Sua resposta vai ajudar a melhorar nossos serviços</h2>

      <p>Deseja colaborar com algumas mais informações?</p>
      <form onSubmit={respsotasSvale}>
         {theme.map((item, index)=>(
           <Card   
           key={index.id}
           value={index.id}
           name="card"
           themes={item.name}      
           //questions={item.name}
           >

         {item.questions.map((subitem,Subindex)=>(
            <Card   
            key={Subindex.id}
            value={Subindex.id}
            name="card"
            //themes={subitem.name}      
            questions={subitem.name}
             //answers={testes.id}
            //value={}
           // handleChange={create}
             />
             ))}
             
             </Card>
        ))} 
      
             
      {/**   <Card 
        type="submit"
        themes="testes"
         questions="perguntas"
          
          name="questions"
          handleChange={handleChange}
        // value={questions.name ? questions.id:''}
        value="oi">
          /*/}
          
        <Submit text={BtnText} />
      </form>

    </C.Container>
  );
};
