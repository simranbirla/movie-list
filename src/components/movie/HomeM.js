import React, { useContext } from "react";
import useTrending from "../useTrending";
import renderList from "../renderList";
import { FavList } from "../../context/Favour";
import SearchMovie from "./SearchMovie";

const HomeM = () => {
  const movielist = useTrending("movie");
  const { value, setValue } = useContext(FavList);
  //console.log(movielist);

  return (
    <div>
      This is home page of movies::
      <div>
        <SearchMovie />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {renderList(movielist, setValue, value, "movie")}
        {localStorage.setItem("movie", JSON.stringify(value))}
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default HomeM;
