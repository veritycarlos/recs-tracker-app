import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Navbar from "./NavBar";
import Rec from "./Rec"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element = {<Home/>} />
        <Route exact path="/rec" element = {<Rec/>} />
      </Routes>
    </div>
  );
}

export default App;
