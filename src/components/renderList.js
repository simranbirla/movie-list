import React from "react";
import { Link } from "react-router-dom";
import { genreTV, genreMovie } from "./genres";
import "../Style/HomePage.css";

const renderList = (list, setfunc, fav, type) => {
  const onButton = (e, id) => {
    e.target.className = "fas fa-heart red";
    setfunc([...fav, id]);
    localStorage.setItem(type, JSON.stringify([...fav, id]));
  };
  if (list) {
    return list.map((item) => {
      return (
        <div key={item.id} className="outer-container">
          <div className="img-container">
            <Link
              to={type === "movie" ? `/movie/${item.id}` : `/tvshow/${item.id}`}
            >
              <img
                src={
                  item.poster_path
                    ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                    : "https://ehelperteam.com/wp-content/uploads/2019/09/Broken-images.png"
                }
                alt={item.original_title}
              />
            </Link>
          </div>
          <p
            className="title"
            style={{ fontWeight: "bold", color: "white", fontSize: "1.2em" }}
          >
            {item.original_title || item.original_name}
          </p>
          <p className="date">
            Release date:{item.first_air_date || item.release_date}
          </p>
          <div className="vote">
            {item.vote_count === 0 ? "New" : item.vote_average}
          </div>
          <div className="genre">
            <strong>Genre:</strong>
            {item.genre_ids
              ? item.genre_ids.map((id) => {
                  const item =
                    type === "movie"
                      ? genreMovie.find((i) => i.id === id)
                      : genreTV.find((i) => i.id === id);
                  return item.name + " ";
                })
              : false}
          </div>
          <button className="fav" onClick={(e) => onButton(e, item.id)}>
            <i className="fas fa-heart"></i>
          </button>
        </div>
      );
    });
  } else {
    return (
      <div className="loader">
        <div class="lds-dual-ring"></div>{" "}
      </div>
    );
  }
};
export default renderList;
