import React from "react";
import "../../Style/Movie.css";
const renderMovie = (data) => {
  return (
    <div className="movie-container">
      <div className="inner-container">
        <div className="movie-image">
          {data.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
              alt={data.title}
            />
          ) : (
            false
          )}
        </div>
        <div className="info">
          <div className="votes">{data.vote_average}</div>
          <h2 className="watch">{data.title}</h2>
          <div className="link">
            <a href={data.homepage} target="_blank" rel="noopener noreferrer">
              View
            </a>
          </div>

          <h3>Release date:{data.release_date}</h3>
          <h3>Runtime :{data.runtime}mins</h3>
        </div>
      </div>
      <div className="summary">
        <h2>{data.original_title}:</h2>
        <div>{data.overview}</div>

        <div className="genres">
          Genres:
          {data.genres ? data.genres.map((genre) => genre.name + " ") : ""}
        </div>
      </div>
      <div className="production">
        <p>
          Production:
          {data.production_companies
            ? data.production_companies.map((produce) => {
                return <p> {produce.name} </p>;
              })
            : ""}
        </p>
      </div>
      <div className="backdrop">
        {data.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${data.backdrop_path}`}
            alt={data.title}
          />
        ) : (
          false
        )}
      </div>
    </div>
  );
};

export default renderMovie;
