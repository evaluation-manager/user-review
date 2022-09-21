import styled from 'styled-components';

export const Container = styled.div`
*{
   
   align-items:center;
   text-align: center;
   justify-content: center;
   background: #fff;

   }
.conteudo{
    display:inline-flex;
    border-radius:5px;
   width: 300px;
}
.ruim, .satisfeito, .legal{
  
   filter:drop-shadow(0px 0px 1px #4b4b50);
animation:flutuar 3s linear infinite;

}

button{
    cursor:pointer;
   
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
}

.satisfeito {
    background: #0000FF;
}

.legal{
    background: #00FF7F;
    margin:50px;    
}
/*.legal:hover{
//width:200px;
}   
.satisfeito:hover{
width:200px;

}
.ruim:hover{
    width:200px;

}*/
a{
    background:#000;
    text-decoration: none;
    width:300px;
    margin:10px;
    padding: 20px;
    color:#fff;
    border-radius: 10px;
}
.qrcode{
    margin:30px;
   
}

span{
    text-align: center;
    color:#4D4D4D;
    font-size:20px;
}
/*celular*/
@media (max-width: 600px){
  .conteudo{
    display:block;
  
    
    .container-select{
        display:block;
        }
        .qrcode{
            display:none;
        }
}
}

`