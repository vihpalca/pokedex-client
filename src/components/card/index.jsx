import { Link } from "react-router-dom";
import { URL_IMG } from "../../constants";

const Card = ({ imgId, name }) => {
  return (
    <Link class="cursor-pointer" to={`/detail/${name}`}>
      <div class="flex flex-col justify-center justify-items-center text-center">
        <div class="p-3 bg-slate-100 rounded-md">
          <img src={`${URL_IMG}/${imgId}.png`} alt="" />
        </div>
        <label class="text-sm font-montserrat">{name}</label>
      </div>
    </Link>
  );
}

export default Card;