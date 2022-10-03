import React from "react";
import  * as C from  './style';
import Submit from "../../components/button/Submit";

export const Comments=()=>{
  
    return(
        <C.Container>
            <div className="comments">
                <form >
        <label>Assunto</label>
        <input placeholder="qual o assunto" />

        <label>Conteúdo</label>
        <textarea placeholder="Envie seu texto"/>
<br></br>
<span>Caso queira, deixe seu nome e seu endereço de email</span>

<input placeholder="Nome" />
<input placeholder="E-mail" />
        <Submit text="Deixa seu comentário"/>

        </form>
        </div>
        </C.Container>
    )
}