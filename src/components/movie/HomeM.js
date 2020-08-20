import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useTrending from "../useTrending";
import renderList from "../renderList";
import { FavList } from "../../context/Favour";
import SearchMovie from "./SearchMovie";

const HomeM = (props) => {
  const movielist = useTrending("movie", props.match.params.id);
  const { value, setValue } = useContext(FavList);
  //console.log(movielist);
  const prevShow = () => {
    if (props.match.params.id !== "1") {
      return (
        <Link to={`/movie-home/${parseInt(props.match.params.id) - 1}`}>
          <button>Prev</button>
        </Link>
      );
    }
  };
  return (
    <div>
      This is home page of movies::
      <div>
        <SearchMovie type="movie" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {renderList(movielist, setValue, value, "movie")}
        {localStorage.setItem("movie", JSON.stringify(value))}
        {prevShow()}
        <Link to={`/movie-home/${parseInt(props.match.params.id) + 1}`}>
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeM;
