
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/common/navbar/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Agency from './components/pages/About/our agency/Agency';
import Footer from './components/common/footer/Footer';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/agency' element={<Agency />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
