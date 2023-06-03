import "./App.css";
import { Container } from "@mui/material";
import DrawerAppBar, { logoHeight } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import NotFound from "./components/NotFound";
import Action from "./components/movieCategory/Action";
import Adventure from "./components/movieCategory/Adventure";
import Comedy from "./components/movieCategory/Comedy";
import Horror from "./components/movieCategory/Horror";
import Romance from "./components/movieCategory/Romance";
import SciFi from "./components/movieCategory/SciFi";
import Thriller from "./components/movieCategory/Thriller";

function App() {
  return (
    <>
      <Container
        maxWidth="false"
        className="main-container"
        sx={{ height: `100vh` }}
      >
        <DrawerAppBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/action" element={<Action />} />
            <Route path="/adventure" element={<Adventure />} />
            <Route path="/comedy" element={<Comedy />} />
            <Route path="/horror" element={<Horror />} />
            <Route path="/romance" element={<Romance />} />
            <Route path="/sciFi" element={<SciFi />} />
            <Route path="/thriller" element={<Thriller />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;
