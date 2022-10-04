import React from   'react';
import Res from './Res';
import * as C from "./style";
function QuestionsRes({opcoesQuestions, opcoesRespostas}){
    return(
        <C.Container>
        {opcoesQuestions.map((opcoes)=>(
            <>
            <h3 key={opcoes.id} 
            value={opcoes.id}>
                {opcoes.name}
                </h3>

                
            <Res opcoes={opcoesRespostas}/>
                    
              </>
        ))}
    
        </C.Container>
    )
}

export default QuestionsRes;