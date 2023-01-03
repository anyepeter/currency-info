import { Route, Routes } from 'react-router-dom';
import Navbar from './components/header';
import Homepage from './components/homepage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="home" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
