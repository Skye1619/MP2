import axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL = "https://api.themoviedb.org/3";
const myKey = "850c76a64839953d0d1631f4e46d66b8";
const imgBaseUrl = "https://image.tmdb.org/t/p"

/* FUNCTION TO FETCH TRENDING MOVIES */
function FetchTrending() {
  /* FETCH WEEKLY TRENDING MOVIES */
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/trending/movie/week?language=en-US`, {
      params: {
        api_key: myKey,
      },
    });
    setMovies(results)
  };

  useEffect(() => {
    fetchMovie();
  }, []);


  /* RETURN AN ARRAY OF OBJECT CONTAINING MOVIE DATA */
  const passMovieData = () => {
    return movies.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.title;
      const movieOverview = movie.overview;
      const backgroundImg = imgBaseUrl + "/original/" + movie.backdrop_path;
      const posterImg = imgBaseUrl + "/w500/" + movie.poster_path;
      const releaseDate = movie.release_date;
  
      return {movieTitle, movieOverview, backgroundImg, posterImg, releaseDate}
    });
  };

  return passMovieData();

}

export default FetchTrending;


/* FUNCTION TO FETCH POPULAR MOVIES */
export function FetchPopular() {
  /* FETCH POPULAR MOVIES */
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    const {data: {results}} = await axios.get(`${API_URL}/movie/popular?language=en-US&page=1`, {
      params: {
        api_key: myKey
      }
    })
    setMovies(results)
  }

  useEffect(() => {
    fetchMovie()
  }, [])


  /* RETURN AN ARRAY OF OBJECT CONTAINING MOVIE DATA */
  const passMovieData = () => {
    return movies.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.title;
      const movieOverview = movie.overview;
      const backgroundImg = imgBaseUrl + "/original/" + movie.backdrop_path;
      const posterImg = imgBaseUrl + "/w500/" + movie.poster_path;
      const releaseDate = movie.release_date;
  
      return {movieTitle, movieOverview, backgroundImg, posterImg, releaseDate}
    });
  };

  return passMovieData();
}


/* FUNCTION TO FETCH UPCOMMING MOVIES */
export function FetchUpcoming() {
  /* FETCH UPCOMING MOVIES */
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    const {data: {results}} = await axios.get(`${API_URL}/movie/upcoming?language=en-US&page=1`, {
      params: {
        api_key: myKey
      }
    })
    setMovies(results)
  }

  useEffect(() => {
    fetchMovie()
  }, [])


  /* RETURN AN ARRAY OF OBJECT CONTAINING MOVIE DATA */
  const passMovieData = () => {
    return movies.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.title;
      const movieOverview = movie.overview;
      const backgroundImg = imgBaseUrl + "/original/" + movie.backdrop_path;
      const posterImg = imgBaseUrl + "/w500/" + movie.poster_path;
      const releaseDate = movie.release_date;
  
      return {movieTitle, movieOverview, backgroundImg, posterImg, releaseDate}
    });
  };

  return passMovieData();
}

/* FUNCTION TO FETCH TOP RATED MOVIES */
export function FetchTopRated() {
  /* FETCH TOP RATED MOVIES */
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    const {data: {results}} = await axios.get(`${API_URL}/movie/top_rated?language=en-US&page=1`, {
      params: {
        api_key: myKey
      }
    })
    setMovies(results)
  }

  useEffect(() => {
    fetchMovie()
  }, [])


  /* RETURN AN ARRAY OF OBJECT CONTAINING MOVIE DATA */
  const passMovieData = () => {
    return movies.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.title;
      const movieOverview = movie.overview;
      const backgroundImg = imgBaseUrl + "/original/" + movie.backdrop_path;
      const posterImg = imgBaseUrl + "/w500/" + movie.poster_path;
      const releaseDate = movie.release_date;
  
      return {movieTitle, movieOverview, backgroundImg, posterImg, releaseDate}
    });
  };

  return passMovieData();
}

