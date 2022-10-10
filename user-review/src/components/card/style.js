import styled from 'styled-components';

export const Container = styled.div`


  .options{
  //backgrou: #E1E2E3;
  
  border-radius: 0.5rem;
 // padding: 10px;
  //margin-bottom: 10px;
  cursor: pointer;
  opacity: 0.8;
  transition: 0.4s;
  color:#000;
  display: flex;
  padding:15px;
  width:400px;
  justify-content:start;
  }
.labelV{
background: #E1E2E3;
//display: none;
}
  .options:hover {
  opacity: 1;
  border: 1px solid  #E1E2E3;
}
@media (max-width: 600px){
  .options{
  //background:blue;
  width: 100px;
  }
}
`;