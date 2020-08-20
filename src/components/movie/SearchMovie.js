import React, { useState } from "react";
import { Link } from "react-router-dom";
const SearchMovie = () => {
  const [word, setWord] = useState("");

  const onMovieInput = (e) => {
    setWord(e.target.value);
  };

  return (
    <div>
      <form>
        <input placeholder="Enter movie" onChange={(e) => onMovieInput(e)} />
        <Link to={`/movie/query/${word}`}>
          <button type="submit">Search</button>
        </Link>
      </form>
    </div>
  );
};

export default SearchMovie;
