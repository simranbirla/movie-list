import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/movie-home/1"}>Movies</Link>
      <Link to={"/tv-home/1"}>TV shows</Link>
      <Link to={"/favourite/movie"}>Favourites</Link>
      <Link to={"/favourite/tv"}>FavTV</Link>
    </div>
  );
};

export default Header;
