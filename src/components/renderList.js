import React from "react";

const renderList = (list) => {
  return list.map((item) => {
    return (
      <div key={item.id}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
            alt={item.original_title}
          />
          <p>{item.original_title || item.original_name}</p>
        </div>
      </div>
    );
  });
};

export default renderList;
