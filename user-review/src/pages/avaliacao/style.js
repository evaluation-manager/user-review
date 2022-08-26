import styled from 'styled-components';

export const Container = styled.div`

.conteudo{
    margin:10px;
    display:inline-flex;
}

.conteudo .satisfeito .ruim .legal{
    width:60px;
    filter:drop-shadow(0px 0px 1px #4b4b50);
    
}

.ruim button{
    background: #FF0000;
}

.satisfeito button{
    background: #0000FF;
}

.legal button{
    background: #00FF7F;
}
button{
    cursor: pointer;
    border:none;
}
`