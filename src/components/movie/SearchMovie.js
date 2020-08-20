import React, { useState } from "react";
import { Link } from "react-router-dom";
const SearchMovie = (props) => {
  const [word, setWord] = useState("");
  //console.log(props);
  const onMovieInput = (e) => {
    setWord(e.target.value);
  };

  return (
    <div>
      <form>
        <input placeholder="Enter movie" onChange={(e) => onMovieInput(e)} />
        <Link to={`/${props.type}/query/${word}`}>
          <button type="submit">Search</button>
        </Link>
      </form>
    </div>
  );
};

export default SearchMovie;
