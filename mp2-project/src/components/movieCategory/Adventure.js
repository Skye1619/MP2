import React, { useEffect, useRef } from "react";
import { FetchAdventure } from "../DataFetching";

function Adventure() {
  const adventureMovie = FetchAdventure();

  const readAdventureMovie = () => {
    return adventureMovie.map((movie) => {
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
      );
    });
  };

  return <div style={{ marginTop: "50px" }}><h1>Adventure</h1>{readAdventureMovie()}</div>;
}

export default Adventure;
