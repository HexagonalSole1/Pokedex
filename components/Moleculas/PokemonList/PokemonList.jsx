import React, { useContext } from 'react';
import { PokemonContext } from '@/context/PokemonContext';
import CardPokemon from "../Card/Card"
import { Loader } from '../../Atomos/Loader/Loader';
import Style from "./PokemonList.module.css"

export const PokemonList = () => {
	const { allPokemons, loading, filteredPokemons } =
		useContext(PokemonContext);

        console.log(allPokemons)

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<div className={Style.card_list_pokemon}>
					{filteredPokemons.length ? (
						<>
							{filteredPokemons.map(pokemon => (
								<CardPokemon pokemon={pokemon} key={pokemon.id}  Style="Ba"/>
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