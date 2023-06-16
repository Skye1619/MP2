import axios from "axios";
import React, { useEffect, useState } from "react";

const API_URL = "https://api.themoviedb.org/3";
const myKey = "850c76a64839953d0d1631f4e46d66b8";
const imgBaseUrl = "https://image.tmdb.org/t/p";
const genres = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

/* FETCH DATA BASED ON GENRE */
export function FetchAction() {
  /* FETCH ACTION MOVIES */
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie?&sort_by=popularity.desc&with_genres=${genres.map((genre) => {return genre.name === 'Action' ? genre.id : ""})}`, {
      params: {
        api_key: myKey,
        query: 'comedy'
      },
    });
    setMovies(results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  /* RETURN AN ARRAY OF OBJECT CONTAINING MOVIE DATA */
  const passMovieData = () => {
    return movies.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.title;
      const movieId = movie.id;
      const movieOverview = movie.overview;
      const backgroundImg = imgBaseUrl + "/original/" + movie.backdrop_path;
      const posterImg = imgBaseUrl + "/w500/" + movie.poster_path;
      const releaseDate = movie.release_date;

      return {
        movieTitle,
        movieId,
        movieOverview,
        backgroundImg,
        posterImg,
        releaseDate,
      };
    });
  };

  return passMovieData();
}

export function FetchAdventure() {
  /* FETCH ACTION MOVIES */
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie?&sort_by=popularity.desc&with_genres=${genres.map((genre) => {return genre.name === 'Adventure' ? genre.id : ""})}`, {
      params: {
        api_key: myKey,
      },
    });
    setMovies(results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  /* RETURN AN ARRAY OF OBJECT CONTAINING MOVIE DATA */
  const passMovieData = () => {
    return movies.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.title;
      const movieId = movie.id;
      const movieOverview = movie.overview;
      const backgroundImg = imgBaseUrl + "/original/" + movie.backdrop_path;
      const posterImg = imgBaseUrl + "/w500/" + movie.poster_path;
      const releaseDate = movie.release_date;

      return {
        movieTitle,
        movieId,
        movieOverview,
        backgroundImg,
        posterImg,
        releaseDate,
      };
    });
  };

  return passMovieData();
}

export function FetchComedy() {
  /* FETCH ACTION MOVIES */
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie?&sort_by=popularity.desc&with_genres=${genres.map((genre) => {return genre.name === 'Comedy' ? genre.id : ""})}`, {
      params: {
        api_key: myKey,
      },
    });
    setMovies(results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  /* RETURN AN ARRAY OF OBJECT CONTAINING MOVIE DATA */
  const passMovieData = () => {
    return movies.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.title;
      const movieId = movie.id;
      const movieOverview = movie.overview;
      const backgroundImg = imgBaseUrl + "/original/" + movie.backdrop_path;
      const posterImg = imgBaseUrl + "/w500/" + movie.poster_path;
      const releaseDate = movie.release_date;

      return {
        movieTitle,
        movieId,
        movieOverview,
        backgroundImg,
        posterImg,
        releaseDate,
      };
    });
  };

  return passMovieData();
}

export function FetchHorror() {
  /* FETCH ACTION MOVIES */
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie?&sort_by=popularity.desc&with_genres=${genres.map((genre) => {return genre.name === 'Horror' ? genre.id : ""})}`, {
      params: {
        api_key: myKey,
      },
    });
    setMovies(results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  /* RETURN AN ARRAY OF OBJECT CONTAINING MOVIE DATA */
  const passMovieData = () => {
    return movies.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.title;
      const movieId = movie.id;
      const movieOverview = movie.overview;
      const backgroundImg = imgBaseUrl + "/original/" + movie.backdrop_path;
      const posterImg = imgBaseUrl + "/w500/" + movie.poster_path;
      const releaseDate = movie.release_date;

      return {
        movieTitle,
        movieId,
        movieOverview,
        backgroundImg,
        posterImg,
        releaseDate,
      };
    });
  };

  return passMovieData();
}

export function FetchRomance() {
  /* FETCH ACTION MOVIES */
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie?&sort_by=popularity.desc&with_genres=${genres.map((genre) => {return genre.name === 'Romance' ? genre.id : ""})}`, {
      params: {
        api_key: myKey,
      },
    });
    setMovies(results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  /* RETURN AN ARRAY OF OBJECT CONTAINING MOVIE DATA */
  const passMovieData = () => {
    return movies.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.title;
      const movieId = movie.id;
      const movieOverview = movie.overview;
      const backgroundImg = imgBaseUrl + "/original/" + movie.backdrop_path;
      const posterImg = imgBaseUrl + "/w500/" + movie.poster_path;
      const releaseDate = movie.release_date;

      return {
        movieTitle,
        movieId,
        movieOverview,
        backgroundImg,
        posterImg,
        releaseDate,
      };
    });
  };

  return passMovieData();
}

export function FetchSciFi() {
  /* FETCH ACTION MOVIES */
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie?&sort_by=popularity.desc&with_genres=${genres.map((genre) => {return genre.name === 'Science Fiction' ? genre.id : ""})}`, {
      params: {
        api_key: myKey,
      },
    });
    setMovies(results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  /* RETURN AN ARRAY OF OBJECT CONTAINING MOVIE DATA */
  const passMovieData = () => {
    return movies.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.title;
      const movieId = movie.id;
      const movieOverview = movie.overview;
      const backgroundImg = imgBaseUrl + "/original/" + movie.backdrop_path;
      const posterImg = imgBaseUrl + "/w500/" + movie.poster_path;
      const releaseDate = movie.release_date;

      return {
        movieTitle,
        movieId,
        movieOverview,
        backgroundImg,
        posterImg,
        releaseDate,
      };
    });
  };

  return passMovieData();
}

export function FetchThriller() {
  /* FETCH ACTION MOVIES */
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/discover/movie?&sort_by=popularity.desc&with_genres=${genres.map((genre) => {return genre.name === 'Thriller' ? genre.id : ""})}`, {
      params: {
        api_key: myKey,
      },
    });
    setMovies(results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  /* RETURN AN ARRAY OF OBJECT CONTAINING MOVIE DATA */
  const passMovieData = () => {
    return movies.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.title;
      const movieId = movie.id;
      const movieOverview = movie.overview;
      const backgroundImg = imgBaseUrl + "/original/" + movie.backdrop_path;
      const posterImg = imgBaseUrl + "/w500/" + movie.poster_path;
      const releaseDate = movie.release_date;

      return {
        movieTitle,
        movieId,
        movieOverview,
        backgroundImg,
        posterImg,
        releaseDate,
      };
    });
  };

  return passMovieData();
}


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
    setMovies(results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  /* RETURN AN ARRAY OF OBJECT CONTAINING MOVIE DATA */
  const passMovieData = () => {
    return movies.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.title;
      const movieId = movie.id;
      const movieOverview = movie.overview;
      const backgroundImg = imgBaseUrl + "/original/" + movie.backdrop_path;
      const posterImg = imgBaseUrl + "/w500/" + movie.poster_path;
      const releaseDate = movie.release_date;

      return {
        movieTitle,
        movieId,
        movieOverview,
        backgroundImg,
        posterImg,
        releaseDate,
      };
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
    const {
      data: { results },
    } = await axios.get(`${API_URL}/movie/popular?language=en-US&page=1`, {
      params: {
        api_key: myKey,
      },
    });
    setMovies(results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  /* RETURN AN ARRAY OF OBJECT CONTAINING MOVIE DATA */
  const passMovieData = () => {
    return movies.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.title;
      const movieId = movie.id;
      const movieOverview = movie.overview;
      const backgroundImg = imgBaseUrl + "/original/" + movie.backdrop_path;
      const posterImg = imgBaseUrl + "/w500/" + movie.poster_path;
      const releaseDate = movie.release_date;

      return {
        movieTitle,
        movieId,
        movieOverview,
        backgroundImg,
        posterImg,
        releaseDate,
      };
    });
  };

  return passMovieData();
}

/* FUNCTION TO FETCH UPCOMMING MOVIES */
export function FetchUpcoming() {
  /* FETCH UPCOMING MOVIES */
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/movie/upcoming?language=en-US&page=1`, {
      params: {
        api_key: myKey,
      },
    });
    setMovies(results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  /* RETURN AN ARRAY OF OBJECT CONTAINING MOVIE DATA */
  const passMovieData = () => {
    return movies.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.title;
      const movieId = movie.id;
      const movieOverview = movie.overview;
      const backgroundImg = imgBaseUrl + "/original/" + movie.backdrop_path;
      const posterImg = imgBaseUrl + "/w500/" + movie.poster_path;
      const releaseDate = movie.release_date;

      return {
        movieTitle,
        movieId,
        movieOverview,
        backgroundImg,
        posterImg,
        releaseDate,
      };
    });
  };

  return passMovieData();
}

/* FUNCTION TO FETCH TOP RATED MOVIES */
export function FetchTopRated() {
  /* FETCH TOP RATED MOVIES */
  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/movie/top_rated?language=en-US&page=1`, {
      params: {
        api_key: myKey,
      },
    });
    setMovies(results);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  /* RETURN AN ARRAY OF OBJECT CONTAINING MOVIE DATA */
  const passMovieData = () => {
    return movies.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.title;
      const movieId = movie.id;
      const movieOverview = movie.overview;
      const backgroundImg = imgBaseUrl + "/original/" + movie.backdrop_path;
      const posterImg = imgBaseUrl + "/w500/" + movie.poster_path;
      const releaseDate = movie.release_date;

      return {
        movieTitle,
        movieId,
        movieOverview,
        backgroundImg,
        posterImg,
        releaseDate,
      };
    });
  };

  return passMovieData();
}

export function SearchMovies( searchKeyword ) {

  const [movies, setMovies] = useState([]);
  const fetchMovie = async () => {
    const {
      data: { results },
    } = await axios.get(`${API_URL}/search/movie`, {
      params: {
        api_key: myKey,
        language: 'en-US',
        page: 1,
        query: searchKeyword,
      },
    });
    setMovies(results);
  };

  useEffect(() => {
    fetchMovie();
  }, [searchKeyword]);

  /* RETURN AN ARRAY OF OBJECT CONTAINING MOVIE DATA */
  const passMovieData = () => {
    return movies.map((movie) => {
      /* MOVIE DETAILS */
      const movieTitle = movie.title;
      const movieId = movie.id
      const movieOverview = movie.overview;
      const backgroundImg = imgBaseUrl + "/original/" + movie.backdrop_path;
      const posterImg = imgBaseUrl + "/w500/" + movie.poster_path;
      const releaseDate = movie.release_date;

      return movie.backdrop_path === null || movie.poster_path === null ? null : {
        movieTitle,
        movieId,
        movieOverview,
        backgroundImg,
        posterImg,
        releaseDate,
      };
    });
  };
  let results = passMovieData();
  const arr = results === [] ? null : results.filter((value) => value !== null)
  let obj = {search : results === [] ? [] : arr, selectedData: arr[0] === undefined ? {} : arr[0]}

  return obj;
}