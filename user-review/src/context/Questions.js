import React, { useEffect, useReducer, useState } from "react";

import { createContext } from "react";

export const QuestionsContext = createContext();
export const QuestionsProvider = ({ children }) => {

//const url = "http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes/questions";
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

//temas
function Previnir(e) {
    e.preventDefault();
    
    }

    let temas=[];
    let questoes=[];
          //let avaliacoes=[]
          //console.log(themes)
        for(let i=0; i<themes.length; i++){
           //console.log(i,theme[i].id);
            temas.push(themes[i])
            const question=themes[i].question;
           // console.table(question)
           for(let j=0; j<question.length; j++){
            //console.log(question[j].id)
            questoes.push(question[j])
           // avaliacoes.push(theme[i].name, "sou a perguntas:"+ question[j].name)
           }          
    }
   
  /*const Themas = themes.map((tema) => (
        tema.name
  ))*/
    
    
   // traformar em arry
   /*const arrayTemas = Themas.map(function (obj) {
        return Object.keys(obj).map(function (key) {
            return obj[key]
        })
    })
   console.log(arrayTemas)*/

 /*  const questoes = themes.map((questao) => (
        questao.question
    ))
     console.log(questoes.name);*/
    //console.log()
    
    const inicialState = {
        stage: [0]

      //  questoes,
    }
//console.log(inicialState)
    const QuestionsReducer = (state, action) => {
        console.log(state, action);
        switch (action.type) {

            case "Change_state":
               
                return state 
            default:
                return state;
        }
    }


    const value = useReducer(QuestionsReducer, inicialState);

    return (
        <form onSubmit={Previnir}>
    <QuestionsContext.Provider value={value}>
        {children} </QuestionsContext.Provider>
        </form> 
    )
    }
