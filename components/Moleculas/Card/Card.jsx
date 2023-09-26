import React from 'react'
import "./Card.css"

export const  Card = ({pokemon}) => {
  return (
    <div className="CardPokemon">
       	<div className="card_img">
				<img
					src={pokemon.sprites.other.dream_world.front_default}
					alt={`Pokemon ${pokemon.name}`}
				/>
			</div>
			<div className="card_info">
				<span className="pokemon_id">N° {pokemon.id}</span>
				<h3>{pokemon.name}</h3>
				<div className="card_types">
				{pokemon.types.map(type => (
						<span key={type.type.name} className={type.type.name}>
							{type.type.name}
						</span>
					))}
				</div>
			</div>
        
    </div>

    
  )
}

export default Card