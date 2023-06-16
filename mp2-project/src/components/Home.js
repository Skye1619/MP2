import React, { useEffect, useState } from "react";
import FetchTrending from "./DataFetching";
import "./HomeCss.css";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import Fab from "@mui/material/Fab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, Modal, } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import axios from "axios";
import YouTube from "react-youtube";

const myKey = "850c76a64839953d0d1631f4e46d66b8";
const API_URL = "https://api.themoviedb.org/3/movie";

function Home() {
  const trending = FetchTrending(); // CALL THE FETCHTRENDING FUNCTION TO GET THE RETURN VALUE(array of object) AND STORE IT IN trending

  const carouselReference = React.useRef();

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
      return {
        cover: [posterImg],
        title: { movieTitle },
        id: { movieId },
        overview: { movieOverview },
        backgroundImg: { backgroundImg },
        releaseDate: { releaseDate },
      };
    });
  };

  return readTrending().length === 0 ? (
    ""
  ) : (
    <div className="myHomeRootContainer">
      <div
        className="myHomeMainContainer"
        style={{ width: "100%", position: "relative" }}
      >
        <ResponsiveContainer
          carouselRef={carouselReference}
          render={(parentWidth, carouselRef) => {
            let currentVisibleSlide = 5;
            if (parentWidth <= 800) currentVisibleSlide = 3;
            if (parentWidth <= 650) currentVisibleSlide = 1;
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Card}
                slideWidth={parentWidth < 600 ? parentWidth - 40 : 500}
                carouselWidth={parentWidth}
                data={readTrending()}
                currentVisibleSlide={currentVisibleSlide}
                maxVisibleSlide={5}
                fadeDistance={0.6}
                customScales={[1, 0.85, 0.7, 0.6]}
              />
            );
          }}
        />
        <Fab
          className="twitch-button Left"
          size="small"
          onClick={() => carouselReference.current?.goBack()}
        >
          <ArrowBackIcon style={{ fontSize: 30 }} />
        </Fab>
        <Fab
          className="twitch-button Right"
          size="small"
          onClick={() => carouselReference.current?.goNext()}
        >
          <ArrowForwardIcon style={{ fontSize: 30 }} />
        </Fab>
      </div>
    </div>
  );
}

export default Home;

const Card = React.memo(function (props) {
  const { data, dataIndex, slideIndex } = props;
  const { cover, title, id, overview, backgroundImg, releaseDate } =
    data[dataIndex];
  const backgroundContainer = document.querySelector(".myHomeRootContainer");
  const [movieVideo, setmovieVideo] = useState(null);
  const [open, setopen] = useState(false);
  const handleClose = () => setopen(false);
  const handleOpen = async () => {
    setopen(true);
    await fetchMovieVideos();
  };
  const [trailerKey, setTrailerKey] = useState();

  const fetchMovieVideos = async () => {
    if (dataIndex - slideIndex === dataIndex) {
      const { data } = await axios.get(`${API_URL}/${id.movieId}`, {
        params: {
          api_key: myKey,
          append_to_response: "videos",
        },
      });
      setmovieVideo(data);
    }
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

  if (dataIndex - slideIndex === dataIndex) {
    backgroundContainer.style.backgroundImage = `url(${backgroundImg.backgroundImg})`;
  }

  return (
    <div
      style={{
        width: "100%",
        height: 300,
        userSelect: "none",
        display: "flex",
        flexDirection: "row",
      }}
      className="my-slide-component"
    >
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
            maxWidth: "1080px",
            height: "100%",
            boxShadow: 24,
            border: "1px solid #e2c04433"

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
      <img
        style={{
          height: "100%",
          width: "30%",
          objectFit: "cover",
          borderRadius: 0,
        }}
        draggable={false}
        src={cover}
      />
      <div
        className="rightSlideInfo"
        style={{
          width: "70%",
          height: "100%",
        }}
        draggable={false}
      >
        <h3>{title.movieTitle}</h3>
        <Button
          className="homePlayButton"
          onClick={handleOpen}
          style={{
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
        <p style={{ marginTop: "10px" }}>
          Release Date: {releaseDate.releaseDate}
        </p>
        <h3>Overview</h3>
        <p className="overviewText">{overview.movieOverview}</p>
      </div>
    </div>
  );
});
