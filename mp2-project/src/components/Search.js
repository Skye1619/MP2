import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { SearchMovies } from './DataFetching';
import { Container } from '@mui/material';


function SearchMovie() {

  const {id} = useParams();
  const search = SearchMovies(id);

  const readSearch = () => {
    return search.map((movie) => {
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
          
        </>
      )
    });
  }

  return <div style={{ marginTop: "50px" }}>{readSearch()}</div>
}


export default SearchMovie
