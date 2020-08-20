import React, { useState, useEffect, useContext } from "react";
import { FavList } from "../context/Favour";
import _ from "lodash";
const Favourite = () => {
  const { value } = useContext(FavList);
  const [name, setName] = useState([]);
  const val_array = _.uniq(value);

  const urls = val_array.map((val) => {
    return `https://api.themoviedb.org/3/movie/${val}?api_key=070fc4e51d03c72359b284a5773a3a25&language=en-US`;
  });

  const addName = (movie) => {
    setName([...name, movie]);
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
    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((res) => res)
      )
    ).then((namep) => {
      addName(namep);
    });
    return;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  console.log("hi");
  return (
    <div>
      Array of favourites movie:::{" "}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {renderFav(name[0])}
      </div>
    </div>
  );
};

export default Favourite;
