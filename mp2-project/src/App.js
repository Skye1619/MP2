import './App.css';
import { Container } from '@mui/material'
import FetchTrending, {FetchPopular, FetchTopRated, FetchUpcoming} from './components/DataFetching';
import DrawerAppBar from './components/Navbar';

function App() {

  

  return (
    <>
      <Container maxWidth='false' className='main-container'>
        <DrawerAppBar />
        <FetchTrending />
        <FetchPopular />
        <FetchUpcoming />
        <FetchTopRated />
      </Container>
    </>
  );
}

export default App;
