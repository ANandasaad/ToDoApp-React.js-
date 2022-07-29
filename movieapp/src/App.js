import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import List from './Components/List';
import Favourite from './Components/Favorite';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <List />
            </>
          }
        />
        <Route path="/fav" element={<Favourite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;