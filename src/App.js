import { Route, Routes } from 'react-router-dom';
import Navbar from './components/header';
import Home from './components/homepage';
import Details from './components/detailpage';

const App = () => (
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

export default App;
