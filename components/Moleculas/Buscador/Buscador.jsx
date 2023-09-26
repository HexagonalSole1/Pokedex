import React,{useContext} from 'react'
import Style from "./Buscador.module.css"
import Input from "@/components/Atomos/Input/Input"
import Button from "@/components/Atomos/Button/Button"

import ButtonType from '@/components/Atomos/ButtonType/ButtonType'

import { PokemonContext } from '@/context/PokemonContext'
import Link from 'next/link'
function Buscador() {
   
  return (
    <div className={Style.DivBuscador}>


        <Input/>
        <Button
        titulo="Buscar"
        />
        <ButtonType/>
        


    </div>
  )
}

export default Buscador