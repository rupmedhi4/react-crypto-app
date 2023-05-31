import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Coins from './Components/Coins';
import CoinsDetails from './Components/CoinsDetails';
import Exchange from './Components/Exchanges';
import Header from './Components/Header';



function App() {
  return (
    <>
      <Router>
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coins />} />
          <Route path="/coin/:id" element={<CoinsDetails />} />
          <Route path="/exchange" element={<Exchange />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
