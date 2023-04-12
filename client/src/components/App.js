import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Navbar from "./NavBar";
import Rec from "./Rec"
import Login from "./Login";
import Signup from "./Signup";
import '../styling/NavBar.css';
import '../styling/Home.css';
import { UserProvider } from "../context/user";
import Categories from "./Categories";
import CategoryForm from "./CategoryForm";



function App() {

  return (
    <>
      <UserProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element = {<Home/>} />
            <Route exact path="/categories" element = {<Categories/>} />
            <Route exact path="/signup" element = {<Signup />} />
            <Route exact path="/categories/new" element = {<CategoryForm />} />
            <Route exact path="/login" element = {<Login />} />
          </Routes>
        </div>
      </UserProvider>
    </>
  );
}

export default App;
