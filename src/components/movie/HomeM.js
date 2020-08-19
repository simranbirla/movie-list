import React, { useContext } from "react";
import useTrending from "../useTrending";
import renderList from "../renderList";
import { FavList } from "../../context/Favour";
const HomeM = () => {
  // const [fav, setFav] = useState([]);
  const movielist = useTrending("movie");
  const { value, setValue } = useContext(FavList);
  //console.log(movielist);
  //console.log(fav);
  //console.log(FavList);
  //console.log(value);
  //console.log(localStorage.getItem("movie"));

  return (
    <div>
      This is home page of movies::
      <h1>{value}</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {renderList(movielist, setValue, value, "movie")}
        {localStorage.setItem("movie", JSON.stringify(value))}
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default HomeM;
