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

const App = () => {
  const [value, setValue] = useState([]);
  const [tv, setTV] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <FavList.Provider value={{ value, setValue }}>
          <FavTV.Provider value={{ tv, setTV }}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movie-home" component={HomeM} />
              <Route path="/movie/:id" component={Movie} />
              <Route path="/tv-home" component={HomeTV} />
              <Route path="/tvshow/:id" component={Tvshow} />
              <Route path="/favourite/movie" component={Favourite} />
              <Route path="/favourite/tv" component={FavouriteTV} />
            </Switch>
          </FavTV.Provider>
        </FavList.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;
