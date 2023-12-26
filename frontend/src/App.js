import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css'
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Signup from './pages/signuppage';
import Login from './pages/login';

const App = () => {
  return (
  <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto ">
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/exercise/:id" element={<ExerciseDetail/>} />
  </Routes>
<Footer />
  </Box>
  )
} 
export default App;