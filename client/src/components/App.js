import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Navbar from "./NavBar";
import Rec from "./Rec"
import Login from "./Login";
import Signup from "./Signup";
import '../styling/NavBar.css';
import '../styling/Home.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element = {<Home/>} />
          <Route exact path="/rec" element = {<Rec/>} />
          <Route exact path="/signup" element = {<Signup/>} />
          <Route exact path="/login" element = {<Login/>} />
        </Routes>
      </div>

    </>
  );
}

export default App;
