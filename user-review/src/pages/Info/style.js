import styled from 'styled-components';

export const Container = styled.div`
*{
   
align-items:center;
text-align: center;
justify-content: center;
background: #fff;
height:100%;

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