'use client'

import styles from '../app/src/container/css/page.module.css'
import Principal from '@/components/Plantilla/Principal'

import { PokemonProvider } from '@/context/PokemonProvider'

export default function Home() {
  return (
    
    <PokemonProvider>
  <main className={styles.main}>
      <Principal/>
    </main>

    </PokemonProvider>
  
    

  )
}
