import React from "react";
import { Link } from "react-router-dom";

const renderList = (list, setfunc, fav, type) => {
  console.log(list);
  return list.map((item) => {
    return (
      <div key={item.id}>
        <div>
          <Link
            to={type === "movie" ? `/movie/${item.id}` : `/tvshow/${item.id}`}
          >
            <img
              src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
              alt={item.original_title}
            />
          </Link>
          <p>{item.original_title || item.original_name}</p>
          <p>Release date:{item.first_air_date}</p>
          <p>Vote:{item.vote_average}</p>
          <button onClick={() => setfunc([...fav, item.id])}>Favourite</button>
        </div>
      </div>
    );
  });
};
export default renderList;
