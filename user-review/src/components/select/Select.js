import React from  'react';

import * as C from './styles';

function Select({options, text, name, handleOnChange,value}){
    return (
        <C.Container>
  
  <label htmlFor={name}>
      {text}:
    </label>
    <br/>
    <select name={name}
      id={name}
      onChange={handleOnChange}
        value={value || ''}>
    <option>Escolha uma opção</option>
      {
      options.map((option) => (
    <option value={option.id} key={option.id}>
   {option.name}
    </option>
  
        
     )) }
         
      </select>
        </C.Container>
    )
}

export default Select;