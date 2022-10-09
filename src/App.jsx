import React from 'react'
import "./App.scss";
import Home from './pages/Home/Home'
import Movie from './pages/Movie/Movie';
import Watch from './pages/Watch/Watch';
import Register from './pages/Register/Register';
import Login from "./pages/Login/Login";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}  />
          <Route path="/login" element={<Login/>} />
          <Route path='/watch' element={<Watch/>} />
          <Route path='/movie' element={<Movie/>} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App