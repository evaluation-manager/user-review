import styled from 'styled-components';

export const Container = styled.div`
/*.container-master{
  background:white;
}*/
.container{
  width:500px;
  margin:20px auto;
  border:1px solid #CDD0E8;
  padding:25px;
  border-radius:20px;
//background-color:#55A4F3;
}
.main-title{
  padding:10px 0;
  text-align:center;
  background: #fff;
  /*border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;*/
  color:#55A4F3;
}

.question{
    text-align:center;
  margin-bottom:25px;
  font-size:20px;
  background:#55A4F3;
}

/*#anwers-box button:hover{
  background:#2d425a;
  color:#fff; 
}*/
.anwers-box {
  
}
.anwers-box .btn-lette1, .btn-lette2{
 font-size:30px;
  font-weight:bold;
  background: #55A4F3;
  color:#55A4F3; 
  
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