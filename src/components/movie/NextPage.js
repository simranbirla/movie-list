import React, { useContext } from "react";
import useTrending from "../useTrending";
import { FavList } from "../../context/Favour";
import { Link } from "react-router-dom";
import SearchMovie from "./SearchMovie";
import renderList from "../renderList";

const NextPage = (props) => {
  const showButton = () => {
    if (props.match.params.page === "2") {
      return (
        <div>
          <Link to="/movie-home">
            <button>Prev</button>
          </Link>
          <Link to="/movie-home/3">
            <button>Next</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <button>Prev</button>
          <button>Next</button>
        </div>
      );
    }
  };
  const movielist = useTrending("movie", props.match.params.page);
  const { value, setValue } = useContext(FavList);
  //console.log(movielist);
  return (
    <div>
      <div>
        <SearchMovie type="movie" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {renderList(movielist, setValue, value, "movie")}
        {localStorage.setItem("movie", JSON.stringify(value))}
        {showButton()}
      </div>
    </div>
  );
};

export default NextPage;
