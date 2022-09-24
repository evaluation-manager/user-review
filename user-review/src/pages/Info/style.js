import styled from 'styled-components';

export const Container = styled.div`
*{
   
align-items:center;
text-align: center;
justify-content: center;
background: #fff;
margin: 0;

}
.survey{
  width:500px;
 margin: auto;
  border:1px solid #CDD0E8;
 padding:25px;
  border-radius:20px;
//background:#000;

}
h1{
    color:#4D4D4D; 
}
.container-select{
    margin:30px;
    padding:30px;
    display:flex;
}
.qrcode{
    margin:30px;
}

span{
    text-align: center;
    color:#4D4D4D;
    font-size:20px;
}

@media (max-width: 600px){
    
    .container-select{
        display:block;
        }
        .qrcode{
            display:none;
        }
}
`;