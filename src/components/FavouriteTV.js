import React, { useState, useEffect, useContext } from "react";
import { FavTV } from "../context/Favour";

const FavouriteTV = () => {
  const { tv } = useContext(FavTV);
  const [name, setName] = useState([]);
  const urls = tv.map((show) => {
    return `https://api.themoviedb.org/3/tv/${show}?api_key=070fc4e51d03c72359b284a5773a3a25&language=en-US`;
  });

  const addName = (n) => {
    setName([...name, n]);
  };

  const renderFav = (datas) => {
    if (datas) {
      return datas.map((data) => {
        return (
          <div key={data.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
              alt={data.name}
            />
            <h2>{data.name}</h2>
          </div>
        );
      });
    } else {
      return (
        <div>
          <h1>Loading</h1>
        </div>
      );
    }
  };

  useEffect(() => {
    const test = Promise.all(
      urls.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((res) => res)
      )
    ).then((namep) => {
      //console.log(namep);
      addName(namep);
    });
    return;
  }, []);

  console.log(name);

  return <div>Array of favourites TV shows:::{renderFav(name[0])}</div>;
};

export default FavouriteTV;
