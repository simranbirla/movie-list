import React, { useState, useEffect } from "react";
import renderMovie from "./renderMovie";

const Movie = (props) => {
  const [movie, setMovie] = useState([]);
  console.log(movie);
  useEffect(() => {
    (async (id) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=070fc4e51d03c72359b284a5773a3a25`
      );
      const data = await response.json();
      setMovie(data);
    })(props.match.params.id);
  }, []);

  return <div>{renderMovie(movie)}</div>;
};

export default Movie;
