import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Search.css";

const Search = (props) => {
  const [word, setWord] = useState("");
  //console.log(props);
  const onMovieInput = (e) => {
    setWord(e.target.value);
  };

  return (
    <div className="search-container">
      <form className="form">
        <input placeholder="Enter movie" onChange={(e) => onMovieInput(e)} />
        <Link to={`/${props.type}/query/${word}`} className="search-link">
          <button className="search-btn" type="submit">
            Search
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Search;
