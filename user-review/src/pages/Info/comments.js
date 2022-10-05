/** @format */

import React from "react";
import * as C from "./style";
import Submit from "../../components/button/Submit";
import { useState } from "react";

export const Comments = ({grades}) => {
  const url="http://localhost:5000/comments"
 // const url = "http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/comments";

  const [grades_id, setGrades_id] = useState();
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  //console.log(grades)

  const submit = async (e) => {
    e.preventDefault();
    const comments = {
      content,
      grades_id,
      name,
      email,
    };
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comments),
    });
    //console.log(comments)
    setName("");
    setContent("");
    setEmail("");

  };
  function enviarNota(){
    setGrades_id(grades)
  }
  return (
    <C.Container>
      <div className="comments">
        <form onSubmit={submit}>
         <h2>Colabore com algum informação</h2>
         <p name="grades_id"
         value={grades_id}>
            Sua nota foi <strong>{grades}</strong>  queremos saber quais motivos te levaram a dar ela 
            </p>
          <label>Nome</label>
          <input
            placeholder="Nome"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            placeholder="E-mail"
            name="name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Conteúdo</label>

          <textarea
            name="name"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Envie seu comentário"
          />
       
          <Submit text="Deixa seu comentário" 
          onClick={enviarNota}
           />
        </form>
      </div>
    </C.Container>
  );
};
