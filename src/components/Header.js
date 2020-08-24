import React from "react";
import { Link } from "react-router-dom";
import "../Style/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Link to={"/"} className="header-item">
        Home
      </Link>
      <Link to={"/movie-home/1"} className="header-item">
        Movies
      </Link>
      <Link to={"/tv-home/1"} className="header-item">
        TV shows
      </Link>
      <Link to={"/favourite/movie"} className="header-item">
        Favourites
      </Link>
      <Link to={"/favourite/tv"} className="header-item">
        FavTV
      </Link>
    </div>
  );
};

export default Header;
