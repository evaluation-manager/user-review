import React, { useEffect, useState } from 'react';
import  * as C from  './style';

import Submit from '../../components/button/Submit';
import Card from '../../components/card/Card';
export const Pergunta = () => {
    const [questions, setQuestions]=useState([]);
    const [theme, setTheme]=useState([]);
    const [answers, setAnswers]=useState([]);

    useEffect(()=>{
        fetch('http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/questions',{
            method:"GET"
        }).then((resp)=>resp.json())
        .then((data)=>{
            setQuestions(data);
        }).catch((err)=>console.log(err))


        fetch('http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/themes',{
            method:"GET"
        }).then((resp)=>resp.json())
        .then((data)=>{
            setTheme(data);
        }).catch((err)=>console.log(err))

        fetch('http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/answers',{
            method:"GET"
        }).then((resp)=>resp.json())
        .then((data)=>{
            setAnswers(data);
        }).catch((err)=>console.log(err))

    }, [])  

    const handleSumit=(e)=>{
        alert("Obrigada pelas respostas");
     }
     //console.log(theme)
    return (
        <C.Container>
            <h2>Sua resposta vai ajudar a melhorar nossos serviços</h2>
            
            <p>Deseja colaborar com algumas mais informações?</p>

            <Card
                themes={theme}
                questions={questions}
                answers={answers}
            />

            
            <Submit text="Finalizar" handleButton={handleSumit}/>
               
        </C.Container>
    )
}