import React, { useContext } from 'react';
import { PokemonContext } from '@/context/PokemonContext';
import CardPokemon from "../Card/Card"
import { Loader } from '../../Atomos/Loader/Loader';
import Style from "./PokemonList.module.css"

export const PokemonList = () => {
	const { allPokemons, loading, filteredPokemons } =
		useContext(PokemonContext);

        console.log("ALLPokemon")

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className={Style.card_list_pokemon}>
					{filteredPokemons.length ? (
						<>
							{filteredPokemons.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					) : (
						<>
							{allPokemons.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id} />
							))}
						</>
					)}
				</div>
			)}
		</>
	);
};