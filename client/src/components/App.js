import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Navbar from "./NavBar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element = {<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
