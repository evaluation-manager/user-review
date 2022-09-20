import styled from 'styled-components';

export const Container = styled.div`

.conteudo{
    display:inline-flex;
    border-radius:5px;
   
}
.conteudo .ruim, .satisfeito, .legal{
    margin:10px;
   filter:drop-shadow(0px 0px 1px #4b4b50);
animation:flutuar 3s linear infinite;
}

@keyframes flutuar{
    0%,
    100%{
        transform:translateY(0px);
    }
    50%{
        transform:translateY(-23px);
    }
}

.conteudo .ruim:nth-child(2){
animation-delay:.2s;
}

/*conteudo dos botões*/
.ruim {
    background: #FF0000;
    margin:20px;
    cursor: pointer;
}

.satisfeito {
    background: #0000FF;
    margin:20px;  
    cursor: pointer;
}

.legal{
    background: #00FF7F;
    margin:20px;    
    cursor: pointer;
}
.legal:hover{
width:200px;
}   
.satisfeito:hover{
width:200px;

}
.ruim:hover{
    width:200px;

}
input{
    cursor:pointer;
}
/*celular*/
@media (max-width: 600px){
  .conteudo{
    display:block;
  } 
   
}

`