import { useQuery } from "react-query";
import { getPokemonList } from "../services/poke-service";

export default function usePokemonList() {
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