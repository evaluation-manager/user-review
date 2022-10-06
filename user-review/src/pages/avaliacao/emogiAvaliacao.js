/** @format */

import React, { useEffect, useState } from "react";
import * as C from "./style.js";
//import { BiHappyAlt, BiHappyBeaming, BiSad } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { InfoAvalicao } from "../Info/Info.js";
import PhotoSatisfeito from './satisfeito.png'
import PhotoFeliz from './legal.png'
import PhotoTriste from './triste.png'

export const UserAvaliacao = () => {
  const { id } = useParams();
  const url = "http://localhost:5000/notas";
  //const url="http://local.avaliacao.online.maceio.al.gov.br/api/avaliacoes/grades";

  const [totlle, setToglle] = useState(true);

  const [grades, setGrades] = useState("");
  const [theme_id, settheme_id] = useState(id);
  const [localization] = useState("48");
  //testes
  const [notas, setNotas] = useState([]);

  useEffect(() => {
    async function fetchDataNotas() {
      const res = await fetch(url);
      const data = await res.json();
      setNotas(data);
    }
    fetchDataNotas();
  }, []);

  const handleSumit = async (e) => {
    e.preventDefault();

    const gradess = {
      //
      grades,
      theme_id,
      localization,
    };

    const req = await fetch(url, {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: JSON.stringify(gradess),
    });

    const addNotas = await req.json();
    //carregamento de forma dinamica
    setNotas((prevOrgans) => [...prevOrgans, addNotas]);
    setToglle(false);
   
  };
  
  const status1 = () => {
    
    setGrades(5);
    
  };
  const status2 = () => {
    setGrades(3);
    
  };
  const status3 = () => {
    setGrades(1);
   
  };

  let teste = notas.map((nota) => nota.grades);

  function bigsatisfeito(value) {
    return value === 5;
  }
  function biglegal(value) {
    return value === 3;
  }
  function bigruim(value) {
    return value === 1;
  }
  let filtlegal = teste.filter(biglegal);
  let filtsatisfeito = teste.filter(bigsatisfeito);
  let filtlruim = teste.filter(bigruim);

  return (
    <C.Container>
      {totlle === true ? (
       <div className="notas">
        <form onSubmit={handleSumit}>
        <span name="theme_id" 
        value={theme_id}>
          O tema em que voce esta dando nota é {id}
          </span>
          <div className="conteudo">
            <div className="satisfeito">
              <button name="grades" value={grades} onClick={status1}>
                <img alt="Satisfeito" src={PhotoSatisfeito} />
                <p>Satisfeito {filtsatisfeito.length}</p>
              </button>
            </div>

            <div className="legal">
              <button name="legal" value={grades} onClick={status2}>
              <img alt="Legal" src={PhotoFeliz} />
                <p>Legal {filtlegal.length} </p>
              </button>
            </div>

            <div className="ruim">
              <button name="ruim" value={grades} onClick={status3}>
              <img alt="Triste" src={PhotoTriste} />
                <p>Ruim {filtlruim.length}</p>
              </button>
            </div>
          </div>
        </form>
        </div>
      ) : (
        <InfoAvalicao />
      )}
    </C.Container>
  );
};
//{totlle ===true ?
//<Comments/>
