import React, { useState, useEffect } from "react";
import renderTv from "./renderTv";

const Tvshow = (props) => {
  const [tvshow, setTvshow] = useState([]);
  console.log(tvshow);

  useEffect(() => {
    (async (id) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=070fc4e51d03c72359b284a5773a3a25`
      );
      const data = await response.json();
      setTvshow(data);
    })(props.match.params.id);
  }, []);
  return <div>{renderTv(tvshow)}</div>;
};

export default Tvshow;
