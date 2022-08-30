import styled from 'styled-components';

export const Container = styled.div`
/*.container-master{
  background:white;
}*/
#container{
  width:500px;
  margin:20px auto;
  border:1px solid #CDD0E8;
  padding:25px;
  border-radius:20px;

}
#main-title{
  padding:20px 0;
  text-align:center;
  background: #2d425a;
  /*border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;*/
  color:#fff;
}

#question{
    text-align:center;
  margin-bottom:25px;
  font-size:20px;
}

#anwers-box button:hover{
  background:#2d425a;
  color:#fff; 
}
#anwers-box {
  
}
#anwers-box .btn-lette1, .btn-lette2{
 font-size:30px;
  font-weight:bold;
  background: #e78230;
  color:#fff; 
  
  line-height:40px;
  text-align:center;
  margin:30px;
  cursor: pointer;
}
/*#anwers-box .btn-lette1{
  background: #e78230;
  color:#fff;
  font-size:30px;
}
#anwers-box .btn-lette2{
  background: #e78250;
  color:#fff;
  font-size:30px;
}*/
`;