import './App.css';
import { Container } from '@mui/material'
import DrawerAppBar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Category from './components/Category';



function App() {

  

  return (
    <>
      <Container maxWidth='false' className='main-container'>
        <DrawerAppBar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/category' element={<Category />} />
          </Routes>
        </div>
      </Container>
    </>
  );
}

export default App;
