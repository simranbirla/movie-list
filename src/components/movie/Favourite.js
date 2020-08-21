import React, { useState, useEffect, useContext } from "react";
import { FavList } from "../../context/Favour";
import _ from "lodash";
const Favourite = () => {
  const { value, setValue } = useContext(FavList);
  const [name, setName] = useState([]);

  const onDelete = (data) => {
    setValue(value.filter((id) => id !== data.id));
    localStorage.setItem(
      "movie",
      JSON.stringify(value.filter((id) => id !== data.id))
    );
  };

  const renderFav = (datas) => {
    if (datas) {
      return datas.map((data) => {
        return (
          <div key={data.id}>
            <button onClick={() => onDelete(data)}>X</button>
            {data.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
                alt={data.name}
              />
            ) : (
              false
            )}

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
    const urls = _.uniq(value).map((val) => {
      return `https://api.themoviedb.org/3/movie/${val}?api_key=070fc4e51d03c72359b284a5773a3a25&language=en-US`;
    });

    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .then((res) => res)
      )
    ).then((namep) => {
      setName([namep]);
    });
    return;
  }, [value]);
  // console.log("hi");
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
