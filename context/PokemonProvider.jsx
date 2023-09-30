'use client'
import { useEffect, useState } from 'react';
import { useForm } from '../hook/useForm';
import { PokemonContext } from '../context/PokemonContext';

export const PokemonProvider = ({ children }) => {
  const [nombrePokemon, setNombrePokemon] = useState('')
  const [allPokemons, setAllPokemons] = useState([]);
  const [globalPokemons, setGlobalPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  // Utilizar CustomHook - useForm
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: '',
  });

  // Estados para la aplicación simples
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);

  // Llamar 50 pokemones a la API
  const getAllPokemons = async (limit = 51) => {
    const baseURL = 'https://pokeapi.co/api/v2/';

    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setAllPokemons([...allPokemons, ...results]);
    setLoading(false);
  };

  // Llamar todos los pokemones
  const getGlobalPokemons = async () => {
    const baseURL = 'https://pokeapi.co/api/v2/';

    const res = await fetch(
      `${baseURL}pokemon?limit=100000&offset=0`
    );
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setGlobalPokemons(results);
    setLoading(false);
  };

  // Llamar a un pokemon por ID
  const getPokemonByID = async (id) => {
    const newData = []
    const baseURL = 'https://pokeapi.co/api/v2/';

    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    await newData.push(data)
    setAllPokemons(newData)
    return data;
  };

  useEffect(() => {
    getAllPokemons();
  }, [offset]);

  useEffect(() => {
    getGlobalPokemons();
  }, []);

  // BTN CARGAR MÁS
  const onClickLoadMore = () => {
    setOffset(offset + 50);
  };

  // Filter Function + State
  const [typeSelected, setTypeSelected] = useState({
    grass: false,
    normal: false,
    fighting: false,
    flying: false,
    poison: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    water: false,
    electric: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknow: false,
    shadow: false,
  });

  const [filteredPokemons, setfilteredPokemons] = useState([]);

  const handleCheckbox = (e) => {
    setTypeSelected({
      ...typeSelected,
      [e.target.name]: e.target.checked,
    });
  };

  // Función para filtrar por botón
  const handleFilterButtonClick = () => {
    // Define tus criterios de filtro aquí, basados en el objeto typeSelected
    const criteriosFiltro = Object.keys(typeSelected).filter(
      (type) => typeSelected[type]
    );

    // Filtra el arreglo globalPokemons basándote en los criterios
    const resultadosFiltrados = globalPokemons.filter((pokemon) =>
      pokemon.types
        .map((type) => type.type.name)
        .some((type) => criteriosFiltro.includes(type))
    );

    // Actualiza el estado filteredPokemons con los resultados filtrados
    setfilteredPokemons(resultadosFiltrados);
  };

  useEffect(() => {
    // Llama a la función de filtro por botón cuando cambia el estado de typeSelected
    handleFilterButtonClick();
  }, [typeSelected]);

  const handleFilterType = (type) => {
    // Filtra los Pokémon por el tipo seleccionado
    const resultadosFiltrados = globalPokemons.filter((pokemon) =>
      pokemon.types
        .map((type) => type.type.name)
        .includes(type)
    );

    // Actualiza el estado filteredPokemons con los resultados filtrados
    setfilteredPokemons(resultadosFiltrados);
  };

  return (
    <PokemonContext.Provider
      value={{
        nombrePokemon, 
        setNombrePokemon,
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalPokemons,
        getPokemonByID,
        onClickLoadMore,
        // Loader
        loading,
        setLoading,
        // Btn Filter
        active,
        setActive,
        // Filter Container Checkbox
        handleCheckbox,
        filteredPokemons,
        // Función de filtro por botón
        handleFilterButtonClick,
        // Función de filtro por tipo
        handleFilterType, // Agrega esta función al contexto

      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
