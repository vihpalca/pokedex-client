import { POKE_SERVICE } from "../constants";

const axios = require('axios');

export function getPokemonList() {
  return axios.get(`${POKE_SERVICE.external}/pokemon?limit=151&offset=0`);
}

export function getPokemon(name) {
  return axios.get(`${POKE_SERVICE.external}/pokemon/${name}`);
}

