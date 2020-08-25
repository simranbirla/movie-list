import React, { useContext } from "react";
import useTrending from "../useTrending";
import renderList from "../renderList";
import { FavTV } from "../../context/Favour";
import Search from "../Search";
import { Link } from "react-router-dom";
import "../../Style/HomePage.css";

const HomeTV = (props) => {
  const tvlist = useTrending("tv", props.match.params.id);
  const { tv, setTV } = useContext(FavTV);
  //console.log(fav);
  const prevShow = () => {
    if (props.match.params.id !== "1") {
      return (
        <Link to={`/tv-home/${parseInt(props.match.params.id) - 1}`}>
          <button>Prev</button>
        </Link>
      );
    }
  };

  return (
    <div>
      <div>
        <Search type="tv" />
      </div>
      <div className="grid-container">
        {renderList(tvlist, setTV, tv, "tv")}
      </div>
      <div className="nav-buttons">
        {prevShow()}
        <Link to={`/tv-home/${parseInt(props.match.params.id) + 1}`}>
          <button>Next</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeTV;
