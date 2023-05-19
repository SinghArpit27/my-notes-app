import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './Components/About';
import NotesCreate from './Components/NotesCreate';
import UpdateData from './Components/UpdateData';
import Profile from './Components/Profile';



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/create' element={ <NotesCreate /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/update' element={ <UpdateData /> } />
          <Route path='/profile' element={ <Profile /> } />
        </Routes>
      </Router>

      {/* <Footer /> */}
    </>
  )
}

export default App;
