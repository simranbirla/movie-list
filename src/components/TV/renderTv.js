import React from "react";
import "../../Style/TVshow.css";

const renderTv = (data) => {
  return (
    <div className="outer-tv">
      <h1 style={{ textAlign: "center", fontSize: "2.6em" }}>{data.name}</h1>
      <div className="back-img">
        {data.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${data.backdrop_path}`}
            alt={data.original}
          />
        ) : (
          false
        )}
      </div>
      <p className="overview">{data.overview}</p>
      <div className="watch">
        <a href={data.homepage} target="_blank" rel="noopener noreferrer">
          Watch
        </a>
      </div>
      <div className="info">
        <p>Release:{data.first_air_date}</p>
        <p>Vote:{data.vote_average}</p>
        <p>
          Runtime:
          {data.episode_run_time
            ? data.episode_run_time.map((time) => {
                return `${time} mins `;
              })
            : false}
        </p>
        <p>
          Genres:
          {data.genres ? data.genres.map((genre) => `${genre.name} `) : false}
        </p>
      </div>

      <div className="production">
        <p style={{ color: "red" }}>Created by:</p>
        <div className="produce">
          {data.created_by
            ? data.created_by.map((create) => {
                return (
                  <div key={create.id} className="produce-container">
                    {create.name}
                  </div>
                );
              })
            : false}
        </div>
      </div>
      <div className="production">
        <p style={{ color: "red" }}>Production:</p>
        <div className="produce">
          {data.production_companies
            ? data.production_companies.map((company) => {
                return (
                  <div key={company.id} className="produce-container">
                    {company.name}
                  </div>
                );
              })
            : false}
        </div>
      </div>
      <div className="season">
        <h2>Seasons:</h2>

        {data.seasons
          ? data.seasons.map((season) => {
              return (
                <div key={season.id} className="tv-outer">
                  <div className="episode">{season.episode_count}</div>
                  {season.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w300${season.poster_path}`}
                      alt={season.name}
                    />
                  ) : (
                    false
                  )}

                  <h3>{season.name}</h3>
                  <p>{season.overview}</p>
                </div>
              );
            })
          : false}
      </div>
    </div>
  );
};

export default renderTv;
