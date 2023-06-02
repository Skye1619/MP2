import './App.css';
import { Container } from '@mui/material'
import DrawerAppBar, { logoHeight } from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Category from './components/Category';
import NotFound from './components/NotFound';




function App() {

  

  return (
    <>
      <Container maxWidth='false' className='main-container' sx={{ height: `100vh` }}>
        <DrawerAppBar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/category' element={<Category />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;
