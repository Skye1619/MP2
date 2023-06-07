import React from "react";
import FetchTrending, {FetchTopRated, FetchUpcoming, FetchPopular} from "./DataFetching";
import MovieCard from "./movieCard/MovieCard";
import { Grid } from "@mui/material";
import { padding } from "@mui/system";
import MovieCardTop from "./movieCard/MovieCardTop";



function Movies() {
  const trending = FetchTrending(); // CALL THE FETCHTRENDING FUNCTION TO GET THE RETURN VALUE(array of object) AND STORE IT IN trending
  const topRated = FetchTopRated(); // CALL THE FETCHTRENDING FUNCTION TO GET THE RETURN VALUE(array of object) AND STORE IT IN trending
  const upcomming = FetchUpcoming(); // CALL THE FETCHTRENDING FUNCTION TO GET THE RETURN VALUE(array of object) AND STORE IT IN trending
  const popular = FetchPopular(); // CALL THE FETCHTRENDING FUNCTION TO GET THE RETURN VALUE(array of object) AND STORE IT IN trending

  /* CREATE AN ARROW FUNCTION TO MAP THE MOVIE DETAILS AND STORE IT IN A VARIABLE */
  const readTrending = () => {
   const Trend =trending.map((movie) => {
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
            <div>Trending Movies</div>
            <MovieCard movieTitle={movieTitle} movieOverview={movieOverview} backgroundImg={backgroundImg} posterImg={posterImg} releaseDate={releaseDate}/>
            
        </>
      )
    });
    return <Grid container spacing={2} style={{ marginTop: '5px', padding: '5px' }}>{Trend}</Grid>
  };

  const readTopRated = () => {
   const Top =topRated.map((movie) => {
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
            <MovieCard movieTitle={movieTitle} movieOverview={movieOverview} backgroundImg={backgroundImg} posterImg={posterImg} releaseDate={releaseDate}/>
        </>
      )
    });
    return <Grid container spacing={2} style={{ marginTop: '30px', padding: '15px' }}>{Top}</Grid>
  };

  const readUpcomming = () => {
    const Up =upcomming.map((movie) => {
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
            <MovieCard movieTitle={movieTitle} movieOverview={movieOverview} backgroundImg={backgroundImg} posterImg={posterImg} releaseDate={releaseDate}/>
        </>
      )
    });
    return <Grid container spacing={2} style={{ marginTop: '30px', padding: '15px' }}>{Up}</Grid>
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
            <div>{}</div>
        </>
      )
    });
  };

   return <div style={{ marginTop: "10px" }}>{readTrending()}</div>;
   return <div style={{ marginTop: "10px" }}>{readTopRated()}</div>;
   return <div style={{ marginTop: "10px" }}>{readUpcomming()}</div>;

  
}

export default Movies;
