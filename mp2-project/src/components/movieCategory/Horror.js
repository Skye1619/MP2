import React from 'react'
import { FetchHorror } from '../DataFetching'

function Horror() {
    const HorrorMovie = FetchHorror()

    const readHorrorMovie = () => {
        return HorrorMovie.map((movie) => {
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

  return <div style={{ marginTop: "50px" }}><h1>Horror</h1>{readHorrorMovie()}</div>
}

export default Horror
