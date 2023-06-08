import './SearchResultCss.css';
import noImgPlaceholder from '../assets/noImgPlaceholder.png'
import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { SearchMovies } from './DataFetching';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function SearchMovie() {
  const { id } = useParams();
  const searchObj = SearchMovies(id);
  const mainSearchContainerRef = useRef(null);
  const poster = useRef(null);
  const container = useRef(null);

  let  {search, selectedData } = searchObj;

  useEffect(() => {
    const mainSearchContainer = mainSearchContainerRef.current;
    mainSearchContainer.addEventListener('wheel', handleScroll);

    return () => {
      mainSearchContainer.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const handleScroll = (event) => {
    event.preventDefault();
    const scrollAmount = event.deltaY;
    const newScrollTop = mainSearchContainerRef.current.scrollTop + scrollAmount;
    mainSearchContainerRef.current.scrollTop = newScrollTop;
  };

  function movieClick(indexValue) {
    selectedData = search[indexValue];
    const title = document.querySelector('#heroTitle');
    const releaseDate = document.querySelector('#heroReleaseDate');
    const overview = document.querySelector('#heroOverview');

    title.innerText = selectedData.movieTitle
    releaseDate.innerText = `Release Date: ${selectedData.releaseDate}`
    overview.innerText = selectedData.movieOverview
    container.current.style.background = `linear-gradient(90deg, #000d 20%, #0003), url(${selectedData.backgroundImg})`
    poster.current.src = selectedData.posterImg
    console.log('click')

  }

  const readSearch = () => {
    if (container.current !== null) {
      container.current.style.backgroundImage = `url(${selectedData.backgroundImg})`
    }
    return search.map((movie, index) => {
      // MOVIE DETAILS
      const movieTitle = movie.movieTitle;
      const movieOverview = movie.movieOverview;
      const backgroundImg = movie.backgroundImg;
      const posterImg = movie.posterImg;
      const releaseDate = movie.releaseDate;

      // EDIT THIS... DITO MAG GAGAWA NG HTML CODE SA RETURN NITO..
      // SAKA TATAWAGIN NAMAN SA RETURN SA PINAKA BABA
      return (
        <Box id='cardContainer' onClick={() => movieClick(index)} sx={posterImg === 'https://image.tmdb.org/t/p/w500/null' ? {display: 'none'} : { width: '100%', textAlign: 'center', '&:hover': {cursor: 'pointer', color: '#e2c044'} }} key={`movie_${index}`}>
          <img key={`movie_${index}`} className='posterImg' src={posterImg === 'https://image.tmdb.org/t/p/w500/null' ? noImgPlaceholder : posterImg } alt={movieTitle} />
          <Typography variant='body1' component='p'>{movieTitle}</Typography>
        </Box>
      );
    });
  };

  return (
    <div key='searchKey' id="mainSearchContainer" ref={mainSearchContainerRef} >
      <Box className='heroContainer' ref={container} sx={{backgroundImage: `url(${selectedData === '' ? '' : selectedData.backgroundImg})`}}>
        <Box className='heroChild left'>
          <img className='heroPoster' ref={poster} src={selectedData === '' ? '' : selectedData.posterImg} />
        </Box>
        <Box className='heroChild right'>
            <h1 id='heroTitle'>{selectedData === '' ? '' : selectedData.movieTitle}</h1>
          <Box id='rDandButton'>
            <Button id='trailerButton' sx={{fontWeight: 'bold', width: 'fit-content', color: '#fff', borderColor: '#fff', '&:hover': {background: '#000', borderColor: '#e2c044', color: '#e2c044'}}} variant='outlined' startIcon={<PlayArrowIcon />}>Play Trailer</Button>
            <p id='heroReleaseDate'>{selectedData === '' ? '' : `Release Date: ${selectedData.releaseDate}`}</p>
          </Box>
          <h2>Overview:</h2>
          <Typography id='heroOverview' variant='body1' component={'p'}>{selectedData === '' ? '' : selectedData.movieOverview}</Typography>
        </Box>
      </Box>
      <Box id='searchResultName'>
        <h3>Search Results:</h3>
      </Box>
      <Box className='cardMainContainer'>
        {readSearch()}
      </Box>
    </div>
  );
}

export default SearchMovie;
