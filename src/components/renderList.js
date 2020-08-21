import React from "react";
import { Link } from "react-router-dom";

const renderList = (list, setfunc, fav, type) => {
  const onButton = (id) => {
    setfunc([...fav, id]);
    //console.log(fav);
    localStorage.setItem(type, JSON.stringify([...fav, id]));
    //console.log(localStorage.getItem(type));
  };

  //console.log(list);
  if (list) {
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
            <p>Release date:{item.first_air_date || item.release_date}</p>
            <div>{item.vote_count == 0 ? "New" : item.vote_average}</div>
            <button onClick={() => onButton(item.id)}>Favourite</button>
          </div>
        </div>
      );
    });
  } else {
    return <div>Loading...</div>;
  }
};
export default renderList;
