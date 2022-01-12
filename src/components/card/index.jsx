const Card = ({ imgId, name }) => {
  return (
    <div class="flex flex-col justify-center justify-items-center text-center cursor-pointer">
      <div class="p-3 bg-slate-100 rounded-md">
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${imgId}.png`} alt="" />
      </div>
      <label class="text-sm">{name}</label>
    </div>
  );
}

export default Card;