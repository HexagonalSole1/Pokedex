import React from 'react'
import Style from "./Buscador.module.css"

function Buscador() {
  return (
    <div>
        <input type="text" className={Style.inputBuscador} />
    </div>
  )
}

export default Buscador