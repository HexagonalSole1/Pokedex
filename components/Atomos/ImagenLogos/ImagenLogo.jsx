import React from 'react'
import style from './ImagenLogo.module.css'

function ImagenLogo(props) {
    return (

            <img src={props.logo} alt="" className={style.ImgLogo} />

    )
}

export default ImagenLogo