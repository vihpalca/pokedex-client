import { useQuery } from "react-query";
import { getPokemonList, getPokemon } from "../services/poke-service";

export function usePokemonList() {
  return useQuery(
    'pokemonList',
    () => {
      const result = getPokemonList().then(result => {
        return result.data.results
      });
      return result;
    },
    { staleTime: Infinity }
  )
}

export function usePokemonDetail(name) {
  return useQuery(
    ['pokemonDetail', name],
    () => {
      const result = getPokemon(name).then(result => {
        return result.data
      });
      return result;
    },
    { staleTime: Infinity }
  )
}