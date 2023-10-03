import Header from './components/Header'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Homepage from './components/HomePage/Homepage'
import Footer from './components/Foot/Footer'
import Movie from './components/Movies/Movie'
import Admin from './components/Admin/Admin'
import Auth from './components/Auth/Auth'
import { useState } from 'react'
import Booking from "./components/Booking/Booking"
import UserProfile from './Profile/UserProfle'
import AddMovies from "./components/Movies/AddMovies"
import AdminProfile from './Profile/AdminProfile'
import { useSelector } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Switch } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'

function App() {


  const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn)
  const isUserLoggedIn = useSelector((state) => state.admin.isLoggedIn)
  console.log("isAdminLogged", isAdminLoggedIn);
  console.log("isUserLogged", isUserLoggedIn);

  return (
    <div className="App">

      <section>
        <Header />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/add" element={<AddMovies />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/user-admin" element={<AdminProfile />} />
        </Routes>
        <Footer/>
      </section>

    </div >
  )
}

export default App
