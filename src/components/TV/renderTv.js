import React from "react";

const renderTv = (data) => {
  return (
    <div>
      <h1>{data.name}</h1>
      {data.backdrop_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300${data.backdrop_path}`}
          alt={data.original}
        />
      ) : (
        false
      )}

      <p>{data.overview}</p>
      <p>Release:{data.first_air_date}</p>
      <p>Vote:{data.vote_average}</p>
      <div>
        Runtime:
        {data.episode_run_time
          ? data.episode_run_time.map((time) => {
              return `${time} mins `;
            })
          : false}
      </div>
      <div>
        Genres:
        {data.genres ? data.genres.map((genre) => `${genre.name} `) : false}
      </div>
      <p>
        <a href={data.homepage} target="_blank" rel="noopener noreferrer">
          Watch
        </a>
      </p>
      <div>
        Created by:
        {data.created_by
          ? data.created_by.map((create) => {
              return (
                <div key={create.id}>
                  {create.name}
                  {create.profile_path ? (
                    <img
                      src={
                        create.profile_path
                          ? `https://image.tmdb.org/t/p/w300${create.profile_path}`
                          : ""
                      }
                      alt={create.name}
                    />
                  ) : (
                    false
                  )}
                </div>
              );
            })
          : false}
      </div>
      <div>
        {data.production_companies
          ? data.production_companies.map((company) => {
              return (
                <div key={company.id}>
                  Production:
                  {company.name}
                  {company.logo_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w300${company.logo_path}`}
                      alt={company.name}
                    />
                  ) : (
                    false
                  )}
                </div>
              );
            })
          : false}
      </div>
      <div>
        <h4>Seasons</h4>
        {data.seasons
          ? data.seasons.map((season) => {
              return (
                <div key={season.id}>
                  <p>{season.episode_count}</p>
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
