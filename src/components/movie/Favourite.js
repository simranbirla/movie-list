import React, { useState, useEffect, useContext } from "react";
import { FavList } from "../../context/Favour";
import _ from "lodash";
import "../../Style/Favourite.css";
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
    console.log(datas);
    if (datas) {
      return datas.map((data) => {
        return (
          <div key={data.id} className="outer">
            <button onClick={() => onDelete(data)} className="close-btn">
              X
            </button>
            {data.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${data.poster_path}`}
                alt={data.title}
                className="image"
              />
            ) : (
              false
            )}

            <h2 className="title">{data.title}</h2>
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
      <div className="favourite-container">{renderFav(name[0])}</div>
    </div>
  );
};

export default Favourite;
