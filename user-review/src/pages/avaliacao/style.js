import styled from 'styled-components';

export const Container = styled.div`
*{
   
   align-items:center;
   text-align: center;
   justify-content: center;
   background: #fff;

   }
.conteudo{
    display:flex;
    border-radius:5px;
border: solid 1px #000;
margin-top: 150px;
justify-content: space-around;
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


img{
    width: 300px;
margin: 3px;
}
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
/*tablet*/

@media (max-width: 800px){
    .qrcode{
            background: none;
            //background:blue;
            display: none;
            margin: auto;
        }
        .conteudo{
    display:block;
}
}
/*celular*/
@media (max-width: 600px){
  .conteudo{
    display:block;
    border: none;
  
  }
  .ruim, .satisfeito, .legal{
    filter:none;
    margin: 15px;
  }

}
`