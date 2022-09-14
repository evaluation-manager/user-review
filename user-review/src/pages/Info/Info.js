import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Select from '../../components/select/Select';
import Submit from '../../components/button/Submit';
import {UserAvaliacao} from '../avaliacao/emogiAvaliacao'
import  * as C from  './style';


export const InfoAvalicao=()=>{
        //para guardar estados
        //const [exibir, setExibir]=useState(false);
       const [servico, setServico]=useState([]);
       // const [tema, setTema]=useState([]);

   useEffect(()=>{
      fetch('http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/services',{
    //fetch('http://localhost:5000/service',{
      method:"GET"
      }).then((resp)=>resp.json())
        .then((data)=>{
            setServico(data);
           //console.log(setServico)
     }).catch((err)=> console.log(err))
   
        }, []);
      //console.log(servico)
    //gerar qrcode
//rendeizar teste apenas se o usuairo informar a secretaria

const navigate=useNavigate();

    const handleSumit=(e)=>{
            e.preventDefault();
            navigate('/step1');
    }
/*function toggle(){
//console.log("oi");
setExibir(!exibir);

}*/

    return (
        <C.Container>
       
       <div className='container'>
        <h1>Avalie nossos serviços</h1>
       <div className='container-select'>

    
         <Select 
        text="Serviço"
        name="servico_id"
        options={servico}      
        value={servico.servico_id ? servico.organs_id.id: ''}
        />
        
            <Submit text="Confirmar" />
           {/*Só pretendo mostrar apos a escolha da instuição <UserAvaliacao  */}      
       </div>
       </div>

      <div>
      <UserAvaliacao/>
      </div>    

        <div className='qrcode'>
            <div className='qrcode-msg'>
            <span>Para responder do celular acesse o qrcode ou clique em responder </span>
            </div>
          <Submit text="Acessar qrcode" />

          <Submit text="Responder" handleButton={handleSumit} />
        </div>
      
        </C.Container>

    )
}