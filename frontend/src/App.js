import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/home';
import AboutUs from './pages/about-us';
import ContactUs from './pages/contact-us';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path='/about-us' element={ <AboutUs />}></Route>
          <Route path='/contact-us' element={ <ContactUs />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
