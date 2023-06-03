import React from 'react'
import { FetchRomance } from '../DataFetching'

function Romance() {
    const RomanceMovie = FetchRomance()

    const readRomanceMovie = () => {
        return RomanceMovie.map((movie) => {
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

  return <div style={{ marginTop: "50px" }}><h1>Romance</h1>{readRomanceMovie()}</div>
}

export default Romance
