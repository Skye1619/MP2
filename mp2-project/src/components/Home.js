import React from "react";
import FetchTrending from "./DataFetching";
import HomeMovieCard from "./HomeCard/HomeMovieCard";
import {Carousel} from "react-3d-animated-carousel";
import './HomeCss.css'

function Home() {
  const trending = FetchTrending(); // CALL THE FETCHTRENDING FUNCTION TO GET THE RETURN VALUE(array of object) AND STORE IT IN trending

  /* CREATE AN ARROW FUNCTION TO MAP THE MOVIE DETAILS AND STORE IT IN A VARIABLE */
  const readTrending = () => {
    return trending.map((movie) => {
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
        {heading: movieTitle,
          text: 'Play Trailer',
        description: movieOverview,
        image: backgroundImg
      }
       )
       
    });
  };

  console.log(readTrending())
  return (
    <div className="myHomeMainContainer">
      <Carousel data={readTrending()} isDark={false} />
    </div>
  )
}

export default Home;
