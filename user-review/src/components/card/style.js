import styled from 'styled-components';

export const Container = styled.div`

#container{
  width:500px;
  margin:50px auto;
  border:1px solid #CDD0E8;
  padding:25px;
  border-radius:25px;
  
}
#main-title{
    padding:20px 0;
  text-align:center;
  background-color: #2d425a;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
#question{
    text-align:center;
  margin-bottom:25px;
  font-size:20px;
}
#anwers-box button:hover{
  background-color:#e78230;
  color:#fff; 
}

#anwers-box .btn-lette{
    font-size:30px;
  font-weight:bold;
  background-color: #e78230;
  color:#fff;
  border-radius:50%;
  line-height:40px;
  text-align:center;
  text-transform:uppercase;
  flex:1 1 0;
  max-width:40px;
}

`;