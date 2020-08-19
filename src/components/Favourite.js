import React, { useContext } from "react";
import { FavList } from "../context/Favour";

const Favourite = () => {
  const { value, setValue } = useContext(FavList);
  console.log(value);
  return <div>Array of favourites movie:::{value}</div>;
};

export default Favourite;
