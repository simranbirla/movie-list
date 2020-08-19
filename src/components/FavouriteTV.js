import React, { useContext } from "react";
import { FavTV } from "../context/Favour";

const FavouriteTV = () => {
  const { tv } = useContext(FavTV);
  return <div>Array of favourites TV shows:::{tv}</div>;
};

export default FavouriteTV;
