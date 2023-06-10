import React, { useEffect, useRef } from "react";
import "./movieCard/MovieCss.css";
import FetchTrending, {
  FetchTopRated,
  FetchUpcoming,
  FetchPopular,
} from "./DataFetching";
import MovieCard from "./movieCard/MovieCard";
import { Box, Grid, Typography } from "@mui/material";
import { padding } from "@mui/system";
import MovieCardTop from "./movieCard/MovieCardTop";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Movies() {
  const trending = FetchTrending(); // CALL THE FETCHTRENDING FUNCTION TO GET THE RETURN VALUE(array of object) AND STORE IT IN trending
  const topRated = FetchTopRated(); // CALL THE FETCHTRENDING FUNCTION TO GET THE RETURN VALUE(array of object) AND STORE IT IN trending
  const upcomming = FetchUpcoming(); // CALL THE FETCHTRENDING FUNCTION TO GET THE RETURN VALUE(array of object) AND STORE IT IN trending
  const popular = FetchPopular(); // CALL THE FETCHTRENDING FUNCTION TO GET THE RETURN VALUE(array of object) AND STORE IT IN trending

  /* CREATE AN ARROW FUNCTION TO MAP THE MOVIE DETAILS AND STORE IT IN A VARIABLE */
  const readTrending = () => {
    const Trend = trending.map((movie) => {
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
          <MovieCard
            movieTitle={movieTitle}
            movieOverview={movieOverview}
            backgroundImg={backgroundImg}
            posterImg={posterImg}
            releaseDate={releaseDate}
          />
        </>
      );
    });
  };
  const readTopRated = () => {
    const Top = topRated.map((movie) => {
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
          <MovieCard
            movieTitle={movieTitle}
            movieOverview={movieOverview}
            backgroundImg={backgroundImg}
            posterImg={posterImg}
            releaseDate={releaseDate}
          />
        </>
      );
    });
    return (
      <Grid
        container
        spacing={2}
        style={{ marginTop: "30px", padding: "15px" }}
      >
        {Top}
      </Grid>
    );
  };

  const readUpcomming = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    const Up = upcomming.map((movie) => {
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
          <MovieCard
            movieTitle={movieTitle}
            movieOverview={movieOverview}
            backgroundImg={backgroundImg}
            posterImg={posterImg}
            releaseDate={releaseDate}
          />
        </>
      );
    });
    return (
      <Carousel 
        responsive={responsive}
        infinite={true}
      > 
        {Up}
      </Carousel>
    );
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
      );
    });
  };


  const mainContainerRef = useRef(null);


  useEffect(() => {
    const mainContainer = mainContainerRef.current;
    mainContainer.addEventListener('wheel', handleScroll);

    return () => {
      mainContainer.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const handleScroll = (event) => {
    event.preventDefault();
    const scrollAmount = event.deltaY;
    const newScrollTop = mainContainerRef.current.scrollTop + scrollAmount;
    mainContainerRef.current.scrollTop = newScrollTop;
  };







  return (
    <Box id='movieMainContainer' ref={mainContainerRef}>
      <Typography>Popular Movies</Typography>
      <Box>{readPopular()}</Box>
      <Typography>Upcoming Movies</Typography>
      <Box sx={{marginBottom: '200px'}}>{readUpcomming()}</Box>

    </Box>
  );
}

export default Movies;
