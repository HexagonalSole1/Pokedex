import React, { useContext, useState } from 'react'
import Style from "./Buscador.module.css"
import { PokemonContext } from '@/context/PokemonContext'

function Buscador() {
  const {setNombrePokemon} = useContext(PokemonContext);
  const onChangeFuncion = ({target}) => {
    setNombrePokemon(target.value)
  }


  return (
    <form>
        <input type="text" className={Style.inputBuscador} onChange={onChangeFuncion}/>
    </form>
  )
}

export default Buscador