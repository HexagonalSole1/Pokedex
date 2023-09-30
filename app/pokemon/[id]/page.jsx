'use client'


import React from 'react'

import Especifica from "@/components/Plantilla/Especifica/Especifica"
import { PokemonProvider } from '@/context/PokemonProvider'
import Nav from '@/components/Organismo/Nav/Nav'
 function page({params}) {
  return (
    <PokemonProvider>
        <Nav></Nav>
    <Especifica
    pokemonid1={params.id}
    />

    </PokemonProvider>

    )
}

export default page