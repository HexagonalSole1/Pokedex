'use client'

import React, { useContext } from 'react';
import { PokemonContext } from '@/context/PokemonContext';
import "./ButtonType.css"

function ButtonType(props) {
  const { handleFilterType } = useContext(PokemonContext);

  const handleClick = () => {
    // Llama a la función de filtro por tipo cuando se hace clic en el botón
    handleFilterType(props.name); // Aquí pasamos el nombre del tipo como argumento
  };

  return (
    <button
      type="button"
      name={props.name}
      id={props.id}
      className={props.clase}
      onClick={handleClick}
    >
      {props.titulo}
    </button>
  );
}

export default ButtonType;
