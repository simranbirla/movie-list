import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useTrending from "../useTrending";
import renderList from "../renderList";
import { FavList } from "../../context/Favour";
import Search from "../Search";
import "../../Style/HomePage.css";

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
      <div>
        <Search type="movie" />
      </div>
      <div className="grid-container">
        {renderList(movielist, setValue, value, "movie")}
        {prevShow()}
        <Link to={`/movie-home/${parseInt(props.match.params.id) + 1}`}>
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeM;
