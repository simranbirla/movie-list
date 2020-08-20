import React, { useState, useEffect, useContext } from "react";
import renderList from "../renderList";
import { FavTV } from "../../context/Favour";

const SearchedTv = (props) => {
  const [search, setSearch] = useState([]);
  const { tv, setTv } = useContext(FavTV);
  useEffect(() => {
    (async (word) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=070fc4e51d03c72359b284a5773a3a25&language=en-US&query=${word}&page=1&include_adult=false`
      );
      const data = await response.json();
      console.log(data);
      setSearch([...search, data.results]);
    })(props.match.params.word);

    return;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  console.log(search[0]);
  return (
    <div>
      This is searched page{renderList(search[0], setTv, tv, "tv")}
      {localStorage.setItem("tv", JSON.stringify(tv))}
    </div>
  );
};

export default SearchedTv;
