import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/header';
import Home from './components/homepage';
import Details from './components/detailpage';
import { fetchCoins } from './redux/reducer/currencies';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/display" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
};
export default App;
