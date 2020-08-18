import { useState, useEffect } from "react";

const useTrending = (name) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async (name) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/${name}/day?api_key=070fc4e51d03c72359b284a5773a3a25`
      );
      const data = await response.json();
      setMovie(data.results);
    })(name);
  }, []);
  console.log(movie);
  return movie;
};

export default useTrending;
