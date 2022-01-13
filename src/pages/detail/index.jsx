import { useParams, Link } from "react-router-dom";
import { usePokemonDetail } from "../../queries/poke-query";
import { URL_IMG } from "../../constants";

const PokemonDetail = () => {
  const { name } = useParams();
  const pokemon = usePokemonDetail(name);

  if (!pokemon.isSuccess) {
    return (
      <span>Carregando</span>
    )
  }

  return (
    <div class="px-20 my-auto mx-0">
      <div class="mt-6">
        <Link to="/" class="mt-6 bg-slate-100 px-2 py-2 rounded-md hover:cursor-pointer">
            <span class="font-montserrat">Voltar</span> 
        </Link >
      </div>
      <div class="flex flex-col items-center">
        <span class="py-5 font-montserrat uppercase">{name} N° {pokemon.data.id}</span>
        <div class="grid grid-cols-1 gap-x-5 mt-4 md:grid-cols-2">
          <div class="p-3 bg-slate-100 rounded-md">
            <img src={`${URL_IMG}/${pokemon.data.id}.png`} alt="" />
          </div>
          <div class="flex flex-col">
            <label class="uppercase text-xs font-montserrat">versions: {pokemon.data.game_indices.map(item => ` ${item.version.name} /`)}</label>
            <div class="px-6 py-2 bg-sky-500 mt-6 rounded-md">
              <div class="grid grid-cols-2 gap-x-5">

                <div class="flex flex-col">
                  <label class="text-sm text-slate-50 font-montserrat">Height</label>
                  <label>{pokemon.data.height / 10} m</label>
                  <label class="text-sm text-slate-50 mt-2 font-montserrat">Weight</label>
                  <label>{pokemon.data.weight / 10} kg</label>
                </div>

                <div class="flex flex-col">
                  <label class="text-sm text-slate-50 font-montserrat">Type</label>
                  <label>{pokemon.data.types.map(item => ` ${item.type.name} - `)}</label>
                  <label class="text-sm text-slate-50 mt-2 font-montserrat">Abilities</label>
                  <label>{pokemon.data.abilities.map(item => `${item.ability.name} - `)}</label>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetail;