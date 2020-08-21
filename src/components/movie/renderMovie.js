import React from "react";

const renderMovie = (data) => {
  return (
    <div>
      {data.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
          alt={data.title}
        />
      ) : (
        false
      )}

      <div>Vote {data.vote_average}</div>
      <h2>
        {data.title}{" "}
        <a href={data.homepage} target="_blank" rel="noopener noreferrer">
          Watch
        </a>
      </h2>

      <p>Release date:{data.release_date}</p>
      <p>Run time :{data.runtime}mins</p>
      <h4>{data.original_title}:</h4>
      <div>{data.overview}</div>
      <div>
        Genres:{data.genres ? data.genres.map((genre) => genre.name + " ") : ""}
      </div>
      <p>
        Production:
        {data.production_companies
          ? data.production_companies.map((produce) => produce.name)
          : ""}
      </p>
      {data.backdrop_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300${data.backdrop_path}`}
          alt={data.title}
        />
      ) : (
        false
      )}
    </div>
  );
};

export default renderMovie;
