import React from "react";
import useTrending from "../useTrending";
import renderList from "../renderList";

const HomeM = () => {
  const movielist = useTrending("movie");
  console.log(movielist);

  return (
    <div>
      This is home page of movies::
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {renderList(movielist)}
        <button>Prev</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default HomeM;
