import React from 'react'
import { FetchThriller } from '../DataFetching'

function Thriller() {
    const ThrillerMovie = FetchThriller()

    const readThrillerMovie = () => {
        return ThrillerMovie.map((movie) => {
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

  return <div style={{ marginTop: "50px" }}><h1>Thriller</h1>{readThrillerMovie()}</div>
}

export default Thriller
