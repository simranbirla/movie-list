import React, { useState, useEffect, useContext } from "react";
import renderList from "../renderList";
import { FavList } from "../../context/Favour";
import "../../Style/HomePage.css";
const Searched = (props) => {
  const [search, setSearch] = useState([]);
  const { value, setValue } = useContext(FavList);
  useEffect(() => {
    (async (word) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=070fc4e51d03c72359b284a5773a3a25&language=en-US&query=${word}&page=1&include_adult=false`
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
      <div className="grid-container">
        {renderList(search[0], setValue, value, "movie")}
        {localStorage.setItem("movie", JSON.stringify(value))}
      </div>
    </div>
  );
};

export default Searched;
