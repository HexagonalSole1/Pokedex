import React, { useContext } from 'react'
import Style from "./Buscador.module.css"
import Input from "@/components/Atomos/Input/Input"
import Button from "@/components/Atomos/Button/Button"

import ButtonType from '@/components/Atomos/ButtonType/ButtonType'

import { PokemonContext } from '@/context/PokemonContext'
import Link from 'next/link'
function Buscador() {
  const {nombrePokemon, getPokemonByID} = useContext(PokemonContext)
  const buscar = (e) => {
    e.preventDefault()
    getPokemonByID(nombrePokemon).then((res) => console.log(res)) 
  }

  return (
    <div className={Style.DivBuscador}>


      <Input />
      <Button
        titulo="Buscar"
        click = {buscar}
      />
      <ButtonType />



    </div>
  )
}

export default Buscador