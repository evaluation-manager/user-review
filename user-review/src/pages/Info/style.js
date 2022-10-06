import styled from 'styled-components';

export const Container = styled.div`
*{
   
align-items:center;
text-align: center;
justify-content: center;
text-align:center;
background: #fff;
//margin: 0;

}
.survey{
  width:500px;
 margin:100px auto;
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
.comments{
    display:flex;
    margin: 20px;
}
.comments form {
  // display: inline;
 // background:greenyellow;
border: solid #CDD0E8 1px;
  
}
.comments input {
width: 400px;
display: block;
margin: 10px;
padding: 10px;
}

.comments textarea{
    width: 400px;
    height: 80px;
    display: block;
    margin: 10px;
    padding: 10px;
  
}
.thanksUser{
    
}
//canvas
canvas{
    width:220px;
     height:60px;
     border: 2px solid #4D4D4D;
}
@media (max-width: 600px){
    .survey{
        width:300px;
       // display: inline;
       padding:10px;
    }
    .container-select{
        display:block;
        }
        .qrcode{
            display:none;
        }
        
}
`;