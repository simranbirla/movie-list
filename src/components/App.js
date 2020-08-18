import React from "react";
import Header from "./Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import HomeM from "./movie/HomeM";
import Movie from "./movie/Movie";
import HomeTV from "./TV/HomeTV";
import Tvshow from "./TV/Tvshow";
import Favourite from "./Favourite";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie-home" component={HomeM} />
          <Route path="/movie/:id" component={Movie} />
          <Route path="/tv-home" component={HomeTV} />
          <Route path="/tvshow/:id" component={Tvshow} />
          <Route path="/favourite" component={Favourite} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
