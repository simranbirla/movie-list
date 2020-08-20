import React from "react";
import { Link } from "react-router-dom";
const NextPage = (props) => {
  const showButton = () => {
    if (props.match.params.page === "2") {
      return (
        <div>
          <Link to="/movie-home">
            <button>Prev</button>
          </Link>
          <button>Next</button>
        </div>
      );
    } else {
      return (
        <div>
          <button>Prev</button>
          <button>Next</button>
        </div>
      );
    }
  };

  return <div>This is next page{showButton()}</div>;
};

export default NextPage;
