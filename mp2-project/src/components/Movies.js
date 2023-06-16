import React, { useEffect, useRef } from "react";
import "./movieCard/MovieCss.css";
import FetchTrending, {
  FetchTopRated,
  FetchUpcoming,
  FetchPopular,
} from "./DataFetching";
import MovieCard from "./movieCard/MovieCard";
import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Movies() {
  const trending = FetchTrending();
  const topRated = FetchTopRated();
  const upcomming = FetchUpcoming();
  const popular = FetchPopular();

  /* CREATE AN ARROW FUNCTION TO MAP THE MOVIE DETAILS AND STORE IT IN A VARIABLE */
  const readTrending = () => {
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
    const Trend = trending.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.movieTitle;
      const movieId = movie.movieId;
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
            movieId={movieId}
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
        {Trend}
      </Carousel>
    );
  };
  
  const readTopRated = () => {
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
    const Top = topRated.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.movieTitle;
      const movieId = movie.movieId;
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
            movieId={movieId}
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
        className="myCarousel"
      > 
        {Top}
      </Carousel>
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
      const movieId = movie.movieId;
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
            movieId={movieId}
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
    const Pop = popular.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.movieTitle;
      const movieId = movie.movieId;
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
            movieId={movieId}
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
        {Pop}
      </Carousel>
    );
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
    <Box className= 'MoviePage'>
     <Box id='movieMainContainer' ref={mainContainerRef}>
      <Typography variant= "h4" sx={{marginTop: '20px' , marginLeft: '20px'}}>Trending Movies</Typography>
      <Box sx={{marginBottom: '5px' , marginTop: '0px'}}>{readTrending()}</Box>
      <Typography variant= "h4" sx={{marginLeft: '20px'}}>Top Rated Movies</Typography>
      <Box sx={{marginBottom: '5px', marginTop: '0px'}}>{readTopRated()}</Box>
      <Typography variant= "h4" sx={{marginLeft: '20px'}}>Upcoming Movies</Typography>
      <Box sx={{marginBottom: '5px' , marginTop: '10px'}}>{readUpcomming()}</Box>
      <Typography variant= "h4" sx={{marginTop: '10px', marginLeft: '20px' }}>Popular Movies</Typography>
      <Box sx={{marginBottom: '100px', marginTop: '10px'}}>{readPopular()}</Box>

     </Box>
    </Box>
  );
}

export default Movies;