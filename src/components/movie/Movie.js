import React, { useState, useEffect } from "react";

const renderMovie = (data) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
        alt={data.title}
      />
      <h2>{data.title}</h2>
      <a href={data.homepage} target="_blank">
        Watch
      </a>
      <p>Release date:{data.release_date}</p>
      <p>Run time :{data.runtime}mins</p>
      <h4>{data.original_title}</h4>
      <div>{data.overview}</div>
      <img
        src={`https://image.tmdb.org/t/p/w300${data.backdrop_path}`}
        alt={data.title}
      />
    </div>
  );
};

const Movie = (props) => {
  console.log(props);
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

  return <div>this is a particular movie of id {renderMovie(movie)}</div>;
};

export default Movie;
