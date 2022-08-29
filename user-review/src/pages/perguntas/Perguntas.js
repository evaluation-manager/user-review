import React from 'react';
import Card from '../../components/card/Card';
export const Pergunta = () => {
    return (
        <>
            <h2>Sua resposta vai ajudar a mehlorar nossos serviços</h2>
            
            <p>Deseja colaborar com algumas mais informações?</p>

            <Card
                text="Sobre o atendimento"
                questions="Voce considera um bom atendimento?"
                btnletter1="Sim"
                btnletter2="Não"
            />

            <Card
                text="Sobre o tempo de espera"
                questions="Considera aceitavel?"
                btnletter1="Sim"
                btnletter2="Não"
            />
        </>
    )
}