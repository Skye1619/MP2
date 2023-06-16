import "./SearchResultCss.css";
import noImgPlaceholder from "../assets/noImgPlaceholder.png";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { SearchMovies } from "./DataFetching";
import { Box, Modal } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SearchNotFound from "./SearchNotFound";
import axios from "axios";
import YouTube from "react-youtube";

const myKey = "850c76a64839953d0d1631f4e46d66b8";
const API_URL = "https://api.themoviedb.org/3/movie";

function SearchMovie() {
  const { id } = useParams();
  const searchObj = SearchMovies(id);
  const mainSearchContainerRef = useRef(null);
  const poster = useRef(null);
  const container = useRef(null);

  let { search, selectedData } = searchObj;
  const [movieVideo, setMovieVideos] = useState(null);
  const [open, setOpen] = useState(false);
  const [mId, setMId] = useState("");
  const [bgMovie, setbgMovie] = useState("");

  const handleOpen = async () => {
    setOpen(true);
    await fetchMovieVideos(mId);
  };

  const handleClose = () => setOpen(false);
  const [trailerKey, setTrailerKey] = useState();
  let movieId = "";


  const fetchMovieVideos = async (mid) => {
    const id = mid !== undefined && mid !== "" ? mid : selectedData.movieId;
    const { data } = await axios.get(`${API_URL}/${id}`, {
      params: {
        api_key: myKey,
        append_to_response: "videos",
      },
    });
    setMovieVideos(data);
  };

  useEffect(() => {
    if (movieVideo !== null) {
      let trailer = movieVideo.videos.results.find((vid) => {
        if (
          vid.official &&
          (vid.type === "Trailer" ||
            vid.type === "Teaser" ||
            vid.type === "Teaser Trailer") &&
          (vid.name === "Official Trailer" ||
            vid.name === "Official Teaser" ||
            vid.name === "Official Teaser Trailer")
        ) {
          return vid;
        } else {
          return "";
        }
      });

      trailer =
        trailer !== undefined
          ? trailer
          : movieVideo.videos.results.length !== 0
          ? movieVideo.videos.results[movieVideo.videos.results.length - 1]
          : "";
      setTrailerKey(trailer === undefined ? "" : trailer.key);
    }
  }, [movieVideo]);

  useEffect(() => {
    const mainSearchContainer = mainSearchContainerRef.current;
    mainSearchContainer.addEventListener("wheel", handleScroll);

    return () => {
      mainSearchContainer.removeEventListener("wheel", handleScroll);
    };
  }, [search]);

  const handleScroll = (event) => {
    event.preventDefault();
    const scrollAmount = event.deltaY;
    const newScrollTop =
      mainSearchContainerRef.current.scrollTop + scrollAmount;
    mainSearchContainerRef.current.scrollTop = newScrollTop;
  };

  function movieClick(indexValue) {
    selectedData = search[indexValue];
    const title = document.querySelector("#heroTitle");
    const releaseDate = document.querySelector("#heroReleaseDate");
    const overview = document.querySelector("#heroOverview");

    title.innerText = selectedData.movieTitle;
    releaseDate.innerText = `Release Date: ${selectedData.releaseDate}`;
    overview.innerText = selectedData.movieOverview;
    //container.current.style.backgroundImage = `${selectedData.backgroundImg}`;
    setbgMovie(`${selectedData.backgroundImg}`);
    poster.current.src = selectedData.posterImg;
    mainSearchContainerRef.current.style.scrollBehavior = "smooth";
    mainSearchContainerRef.current.scrollTop = 0;
    mainSearchContainerRef.current.style.scrollBehavior = "auto";
    movieId = selectedData.movieId;
    setMId(selectedData.movieId);
  }

  const readSearch = () => {
    /* if (
      container.current !== null &&
      selectedData.movieId === search[0].movieId
    ) {
      container.current.style.backgroundImage = `url(${bgMovie}`;
    } */
    movieId = selectedData.movieId;
    return search.map((movie, index) => {
      // MOVIE DETAILS
      const movieTitle = movie.movieTitle;
      const movieId = movie.id;
      const movieOverview = movie.movieOverview;
      const backgroundImg = movie.backgroundImg;
      const posterImg = movie.posterImg;
      const releaseDate = movie.releaseDate;

      // EDIT THIS... DITO MAG GAGAWA NG HTML CODE SA RETURN NITO..
      // SAKA TATAWAGIN NAMAN SA RETURN SA PINAKA BABA
      return (
        <Box
          id="cardContainer"
          onClick={() => movieClick(index)}
          sx={
            posterImg === "https://image.tmdb.org/t/p/w500/null"
              ? { display: "none" }
              : {
                  width: "100%",
                  textAlign: "center",
                  "&:hover": { cursor: "pointer", color: "#e2c044" },
                }
          }
          key={`movie_${index}`}
        >
          <img
            key={`movie_${index}`}
            className="posterImg"
            src={
              posterImg === "https://image.tmdb.org/t/p/w500/null"
                ? noImgPlaceholder
                : posterImg
            }
            alt={movieTitle}
          />
          <Typography variant="body1" component="p">
            {movieTitle}
          </Typography>
        </Box>
      );
    });
  };

  return search.length === 0 ? (
    <SearchNotFound refer={mainSearchContainerRef} title={id} />
  ) : (
    <div key="searchKey" id="mainSearchContainer" ref={mainSearchContainerRef}>
      <Box
        className="heroContainer"
        ref={container}
        sx={{
          backgroundImage: `url(${
            bgMovie === "" ? selectedData.backgroundImg : bgMovie
          })`,
        }}
      >
        <Box className="heroChild Left">
          <img
            className="heroPoster"
            ref={poster}
            src={selectedData === "" ? "" : selectedData.posterImg}
          />
        </Box>
        <Box className="heroChild Right">
          <h1 id="heroTitle">
            {selectedData === "" ? "" : selectedData.movieTitle}
          </h1>
          <Box id="rDandButton">
            <Button
              id="trailerButton"
              onClick={handleOpen}
              sx={{
                fontWeight: "bold",
                width: "fit-content",
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  background: "#000",
                  borderColor: "#e2c044",
                  color: "#e2c044",
                },
              }}
              variant="outlined"
              startIcon={<PlayArrowIcon />}
            >
              Play Trailer
            </Button>
            <p id="heroReleaseDate">
              {selectedData === ""
                ? ""
                : `Release Date: ${selectedData.releaseDate}`}
            </p>
          </Box>
          <h2>Overview:</h2>
          <Typography id="heroOverview" variant="body1" component={"p"}>
            {selectedData === "" ? "" : selectedData.movieOverview}
          </Typography>
        </Box>
      </Box>
      <Box id="searchResultName">
        <h3>Search Results:</h3>
      </Box>
      <Box className="cardMainContainer">{readSearch()}</Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "grid",
          placeItems: "center",
          width: "100%",
          height: "100%",
          padding: "0",
          margin: "0",
        }}
      >
        <Box
          className="modalBox"
          sx={{
            width: "75%",
            height: "100%",
            boxShadow: 24,
            border: "1px solid #e2c04433",
          }}
        >
          <YouTube
            videoId={trailerKey}
            id="youtubePlayer"
            className="youtubePlayer"
            opts={{ playerVars: { autoplay: 1 } }}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default SearchMovie;
