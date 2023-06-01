import React from 'react'
import FetchTrending from "./DataFetching";

function Movies() {
  const trending = FetchTrending(); // CALL THE FETCHTRENDING FUNCTION TO GET THE RETURN VALUE(array of object) AND STORE IT IN trending

  /* CREATE AN ARROW FUNCTION TO MAP THE MOVIE DETAILS AND STORE IT IN A VARIABLE */
  const readTrending = () => {
    return trending.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.movieTitle;
      const movieOverview = movie.movieOverview;
      const backgroundImg = movie.backgroundImg
      const posterImg = movie.backgroundImg
      const releaseDate = movie.releaseDate;
  
      /* EDIT THIS... DITO MAG GAGAWA NG HTML CODE SA RETURN NITO..
       SAKA TATAWAGIN NAMAN SA RETURN SA PINAKA BABA */
      return {movieTitle, movieOverview, backgroundImg, posterImg, releaseDate}
    })
  }
  return (
    <div style={{marginTop: '50px'}}>
      das
    </div>
  )
}

export default Movies
