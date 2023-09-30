import React, { useContext } from 'react'
import Style from "./Principal.module.css"
import Nav from '../Organismo/Nav/Nav'
import Buscador from '../Moleculas/Buscador/Buscador'
import { PokemonContext } from '@/context/PokemonContext';
import { PokemonList } from '../Moleculas/PokemonList/PokemonList'
import Tipos from '../Moleculas/Tipos/Tipos'

function Principal() {
    const { onClickLoadMore, active, setActive } = useContext(PokemonContext)





    return (


        <div className={Style.DivBody}>

            <Nav />

            <section className={Style.DivContent}>
                <div className={Style.DivBuscador}>
                    <Buscador />
                    <Tipos />


                </div>


                <div className={Style.DivPokemon}>

                    <PokemonList />



                    <div className={Style.container_btn_load_more_container}>
                        <button className={Style.btn_load_more} onClick={onClickLoadMore}>
                            Cargar más
                        </button>
                    </div>


                </div>

            </section>

        </div>




    )
}

export default Principal