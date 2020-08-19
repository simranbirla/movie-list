import React, { useState, useContext } from "react";
import useTrending from "../useTrending";
import renderList from "../renderList";
import { FavTV } from "../../context/Favour";

const HomeTV = () => {
  const tvlist = useTrending("tv");
  const { tv, setTV } = useContext(FavTV);
  //console.log(fav);
  console.log(tvlist);
  return (
    <div>
      This is home page of TV::
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {renderList(tvlist, setTV, tv, "tv")}
      </div>
    </div>
  );
};

export default HomeTV;
