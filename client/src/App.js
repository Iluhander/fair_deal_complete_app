import './App.css';
import Navbar from "./Navbar/Navbar";
import Main from "./pages/Main/Main";
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts.";

function App() {
  return (
      <Router>
          <Navbar/>
          <Routes>
              <Route exact path='/' exact element={<Main/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contacts' element={<Contacts/>}/>
          </Routes>
          <Footer/>
      </Router>
  );
}

export default App;
