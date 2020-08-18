import React, { useState } from "react";
import useTrending from "../useTrending";
import renderList from "../renderList";

const HomeTV = () => {
  const tvlist = useTrending("tv");
  const [fav, setFav] = useState([]);
  console.log(fav);
  console.log(tvlist);
  return (
    <div>
      This is home page of TV::
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {renderList(tvlist, setFav, fav)}
      </div>
    </div>
  );
};

export default HomeTV;
