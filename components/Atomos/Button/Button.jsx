import React from 'react'
import Style from "./button.module.css"

function Button(props) {
  return (
<button className={Style.button} onClick={props.click}>{props.titulo}</button>  )
}

export default Button