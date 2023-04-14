import React from "react";
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Home from "./Home";
import Navbar from "./NavBar";
import Rec from "./Rec";
import RecForm from "./RecForm";
import RecEdit from "./RecEdit";
import NoteForm from "./NoteForm";
import Login from "./Login";
import Signup from "./Signup";
import '../styling/NavBar.css';
import '../styling/Home.css';
import Category from "./Category";
import Categories from "./Categories";
import CategoryForm from "./CategoryForm";
import { useEffect } from 'react';
import { fetchSessions } from '../features/sessionsSlice';
import { fetchCategories } from "../features/categoriesSlice";
import { fetchRecommendations } from "../features/recommendationsSlice";
import { fetchNotes } from "../features/notesSlice";
import { fetchAllCategories } from "../features/allCategoriesSlice";



function App() {
  const loggedIn = useSelector(state => state.sessions.loggedIn)
  const dispatch = useDispatch();

  useEffect (() => {
    dispatch(fetchSessions())
  }, [dispatch]);

  useEffect(() => {
    if (loggedIn) {
      dispatch(fetchRecommendations())
      dispatch(fetchCategories())
      dispatch(fetchNotes())
      dispatch(fetchAllCategories())
    }
  }, [loggedIn, dispatch])

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element = {<Home/>} />
        <Route exact path="/categories" element = {<Categories/>} />
        <Route exact path="/categories/:id" element = {<Category/>} />
        <Route exact path="/signup" element = {<Signup />} />
        <Route exact path="/categories/new" element = {<CategoryForm />} />
        <Route exact path="/login" element = {<Login />} />
        <Route exact path="/recommendations/new" element={<RecForm />} />
        <Route exact path="/recommendations/:id" element={<Rec />} />
        <Route exact path="/recommendations/:id/edit" element={<RecEdit />} />
        <Route exact path="/recommendations/:id/notes/new" element={<NoteForm />} />
      </Routes>
    </>
  );
}

export default App;
