import React, { useContext } from "react";
import useTrending from "../useTrending";
import renderList from "../renderList";
import { FavTV } from "../../context/Favour";
import SearchMovie from "../movie/SearchMovie";
import { Link } from "react-router-dom";

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
      This is home page of TV::
      <SearchMovie type="tvshow" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {renderList(tvlist, setTV, tv, "tv")}
      </div>
      {prevShow()}
      <Link to={`/tv-home/${parseInt(props.match.params.id) + 1}`}>
        <button>Next</button>
      </Link>
    </div>
  );
};

export default HomeTV;
