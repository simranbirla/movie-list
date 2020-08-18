import React from "react";
import useTrending from "../useTrending";
import renderList from "../renderList";

const HomeTV = () => {
  const tvlist = useTrending("tv");
  console.log(tvlist);
  return (
    <div>
      This is home page of TV::
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {renderList(tvlist)}
      </div>
    </div>
  );
};

export default HomeTV;
