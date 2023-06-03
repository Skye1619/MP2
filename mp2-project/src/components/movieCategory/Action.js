import React from "react";
import { FetchAction } from "../DataFetching";

function Action() {
  const actionMovie = FetchAction(); // CALL THE FETCHACTION FUNCTION TO GET THE RETURN VALUE(array of object) AND STORE IT IN actionMovie

  /* CREATE AN ARROW FUNCTION TO MAP THE MOVIE DETAILS AND STORE IT IN A VARIABLE */
  const readActionMovie = () => {
    return actionMovie.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.movieTitle;
      const movieOverview = movie.movieOverview;
      const backgroundImg = movie.backgroundImg;
      const posterImg = movie.posterImg;
      const releaseDate = movie.releaseDate;
      /* EDIT THIS... DITO MAG GAGAWA NG HTML CODE SA RETURN NITO..
       SAKA TATAWAGIN NAMAN SA RETURN SA PINAKA BABA */
      return (
        <>
            <div>{movieTitle}</div>
        </>
      )
    });
  };

  return <div style={{ marginTop: "50px" }}>{readActionMovie()}</div>
}

export default Action;
