import React, { useState } from "react";
import useTrending from "../useTrending";
import renderList from "../renderList";

const HomeM = () => {
  const [fav, setFav] = useState([]);
  const movielist = useTrending("movie");
  //console.log(movielist);
  //console.log(fav);

  return (
    <div>
      This is home page of movies::
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {renderList(movielist, setFav, fav, "movie")}
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default HomeM;
