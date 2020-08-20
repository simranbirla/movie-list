import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useTrending from "../useTrending";
import renderList from "../renderList";
import { FavList } from "../../context/Favour";
import SearchMovie from "./SearchMovie";

const HomeM = () => {
  const movielist = useTrending("movie", 1);
  const { value, setValue } = useContext(FavList);
  //console.log(movielist);
  return (
    <div>
      This is home page of movies::
      <div>
        <SearchMovie type="movie" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {renderList(movielist, setValue, value, "movie")}
        {localStorage.setItem("movie", JSON.stringify(value))}
        <Link to={`/movie-home/2`}>
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeM;
