import React, { useEffect, useState } from 'react';
import  * as C from  './style';

import Submit from '../../components/button/Submit';
import Card from '../../components/card/Card';

export const Pergunta = () => {
    const [questions, setQuestions]=useState([]);
    const [theme, setTheme]=useState([]);
    const [answers, setAnswers]=useState([]);

    useEffect(()=>{
        //fetch("http://localhost:5000/question",{
        fetch('http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions',{
            //method:"GET"
        }).then((resp)=>resp.json())
        .then((data)=>{
            setQuestions(data);
        }).catch((err)=>console.log(err))

       // fetch("http://localhost:5000/themes",{
        fetch('http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes',{
           // method:"GET"
        }).then((resp)=>resp.json())
        .then((data)=>{
            setTheme(data);
        }).catch((err)=>console.log(err))

        //fetch("http://localhost:5000/answers",{
        fetch('http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/answers',{
            //method:"GET"
        }).then((resp)=>resp.json())
        .then((data)=>{
            setAnswers(data);
        }).catch((err)=>console.log(err))

    }, [])  

    const handleSumit=(e)=>{
        alert("Obrigada pelas respostas");
     }
    // console.log(theme)
     let temas=theme.map((them)=>(
        them.name
     ));

     let perguntas=questions.map((them)=>(
        them.name
     ));
    console.log(perguntas);

     for(let i=0; i<temas.length; i++){
        //console.log("testanod",temas[i])
     }
    //)
    //testes de juntas objetos
    //const merge=
   // console.log(answers)

  //  console.log(questions)

    return (
        <C.Container>
            <h2>Sua resposta vai ajudar a melhorar nossos serviços</h2>
            
            <p>Deseja colaborar com algumas mais informações?</p>
       
       {temas.map((testes)=>(
        
            <Card 
                themes={testes}
              
             />
        
        )) }
            
            <Submit text="Finalizar" handleButton={handleSumit}/>
               
        </C.Container>
    )
}