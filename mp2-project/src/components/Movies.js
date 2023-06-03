import React from "react";
import FetchTrending, {FetchTopRated, FetchUpcoming, FetchPopular} from "./DataFetching";

function Movies() {
  const trending = FetchTrending(); // CALL THE FETCHTRENDING FUNCTION TO GET THE RETURN VALUE(array of object) AND STORE IT IN trending
  const topRated = FetchTopRated(); // CALL THE FETCHTRENDING FUNCTION TO GET THE RETURN VALUE(array of object) AND STORE IT IN trending
  const upcomming = FetchUpcoming(); // CALL THE FETCHTRENDING FUNCTION TO GET THE RETURN VALUE(array of object) AND STORE IT IN trending
  const popular = FetchPopular(); // CALL THE FETCHTRENDING FUNCTION TO GET THE RETURN VALUE(array of object) AND STORE IT IN trending

  /* CREATE AN ARROW FUNCTION TO MAP THE MOVIE DETAILS AND STORE IT IN A VARIABLE */
  const readTrending = () => {
    return trending.map((movie) => {
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

  const readTopRated = () => {
    return topRated.map((movie) => {
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

  const readUpcomming = () => {
    return upcomming.map((movie) => {
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

  const readPopular = () => {
    return popular.map((movie) => {
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

  return <div style={{ marginTop: "50px" }}>{readTrending()}</div>
}

export default Movies;
