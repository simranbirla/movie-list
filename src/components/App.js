import React, { useState } from "react";
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import HomeM from "./movie/HomeM";
import Movie from "./movie/Movie";
import HomeTV from "./TV/HomeTV";
import Tvshow from "./TV/Tvshow";
import Favourite from "./Favourite";
import FavouriteTV from "./FavouriteTV";
import { FavList } from "../context/Favour";
import { FavTV } from "../context/Favour";
import localStore from "./local";
import Searched from "./movie/Searched";
import SearchedTv from "./TV/SearchedTv";

const App = () => {
  const val = localStore("movie");
  //console.log("VAL", val);
  const [value, setValue] = useState(val);
  //console.log("AFVLIST", value);
  const [tv, setTV] = useState(localStore("tv"));
  //console.log(tv);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <FavList.Provider value={{ value, setValue }}>
          <FavTV.Provider value={{ tv, setTV }}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movie-home/:id" exact component={HomeM} />
              <Route path="/movie/:id" exact component={Movie} />
              <Route path="/tv-home/:id" component={HomeTV} />
              <Route path="/tvshow/:id" component={Tvshow} />
              <Route path="/favourite/movie" component={Favourite} />
              <Route path="/favourite/tv" component={FavouriteTV} />
              <Route path="/movie/query/:word" component={Searched} />
              <Route path="/tv/query/:word" component={SearchedTv} />
            </Switch>
          </FavTV.Provider>
        </FavList.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
