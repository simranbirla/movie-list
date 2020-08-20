import React from "react";

const renderMovie = (data) => {
  return (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
        alt={data.title}
      />
      <h2>{data.title}</h2>
      <a href={data.homepage} target="_blank" rel="noopener noreferrer">
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

export default renderMovie;
