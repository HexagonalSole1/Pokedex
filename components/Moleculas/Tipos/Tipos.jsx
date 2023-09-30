import React from 'react'
import ButtonType from '@/components/Atomos/ButtonType/ButtonType'
import Style from "./Tipos.module.css"

function Tipos() {
  return (

    <div className={Style.DivTipos}>


      <ButtonType
        clase="Buttongrass"
        titulo="Planta"
        name='grass'
        id='grass'
      />

      <ButtonType
        clase="Buttonfire"
        titulo="Fuego"
        name='fire'
        id='fire'
      />

      <ButtonType
        clase="Buttonbug"
        titulo="Bicho"
        name='bug'
        id='bug'
      />

      <ButtonType
        clase="Buttonfairy"
        titulo="Hada"
        name='fairy'
        id='fairy'
      />

      <ButtonType
        clase="Buttondragon"
        titulo="Dragón"
        name='dragon'
        id='dragon'
      />


      <ButtonType
        clase="Buttonground"
        titulo="Tierra"
        name='ground'
        id='ground'
      />

      <ButtonType
        clase="Buttonnormal"
        titulo="Normal"
        name='normal'
        id='normal'
      />

      <ButtonType
        clase="Buttonpsychic"
        titulo="Psíquico"
        name='psychic'
        id='psychic'
      />

      <ButtonType
        clase="Buttonsteel"
        titulo="Acero"
        name='steel'
        id='steel'
      />

      <ButtonType
        clase="Buttondark"
        titulo="Siniestro"
        name='dark'
        id='dark'
      />

      <ButtonType
        clase="Buttonelectric"
        titulo="Eléctrico"
        name='electric'
        id='electric'
      />

      <ButtonType
        clase="Buttonfighting"
        titulo="Lucha"
        name='fighting'
        id='fighting'
      />

      <ButtonType
        clase="Buttonflying"
        titulo="Volador"
        name='flying'
        id='flying'
      />

      <ButtonType
        clase="Buttonice"
        titulo="Hielo"
        name='ice'
        id='ice'
      />

      <ButtonType
        clase="Buttonpoison"
        titulo="Veneno"
        name='poison'
        id='poison'
      />

      <ButtonType
        clase="Buttonrock"
        titulo="Roca"
        name='rock'
        id='rock'
      />

      <ButtonType
        clase="Buttonwater"
        titulo="Agua"
        name='water'
        id='water'
      />


    </div>

  )
}

export default Tipos