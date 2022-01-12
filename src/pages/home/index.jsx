import usePokemonList from "../../queries/poke-query";
import Card from "../../components/card";

const Home = (props) => {
  const pokemonList = usePokemonList();

  const renderCards = (poke, index) => {
    return (
      <Card 
        key={index}
        imgId={index + 1}
        name={poke.name}
      />
    )
  }

  if (!pokemonList.isSuccess) {
    return (
      <span>Carregando</span>
    )
  }

  return (
    <div class="grid grid-cols-4 p-5 gap-y-10 gap-x-10">
      { pokemonList.data.map((poke, index) => renderCards(poke, index)) }
    </div>
  );
}

export default Home;