import React, { useEffect, useRef } from "react";
import { FetchComedy } from '../DataFetching'

function Comedy() {
    const comedyMovie = FetchComedy()

    const readComedyMovie = () => {
        return comedyMovie.map((movie) => {
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

  return <div style={{ marginTop: "50px" }}><h1>Comedy</h1>{readComedyMovie()}</div>
}

export default Comedy
