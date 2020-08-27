import React, { useState, useEffect, useContext } from "react";
import { FavTV } from "../../context/Favour";
import "../../Style/Favourite.css";
import _ from "lodash";
const FavouriteTV = () => {
  const { tv, setTV } = useContext(FavTV);
  const [name, setName] = useState([]);

  const onDelete = (data) => {
    setTV(tv.filter((id) => id !== data.id));
    localStorage.setItem(
      "tv",
      JSON.stringify(tv.filter((id) => id !== data.id))
    );
  };

  const renderFav = (datas) => {
    if (datas) {
      return datas.map((data) => {
        return (
          <div key={data.id} className="outer">
            <button onClick={() => onDelete(data)} className="close-btn">
              X
            </button>
            <img
              src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
              alt={data.name}
              className="image"
            />
            <h2 style={{ color: "white" }}>{data.name}</h2>
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
    const urls = _.uniq(tv).map((show) => {
      return `https://api.themoviedb.org/3/tv/${show}?api_key=070fc4e51d03c72359b284a5773a3a25&language=en-US`;
    });

    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((res) => res)
      )
    ).then((namep) => {
      setName([...namep]);
    });

    //return;
  }, [tv]);

  return (
    <div>
      <div className="favourite-container">{renderFav(name)}</div>
    </div>
  );
};

export default FavouriteTV;
