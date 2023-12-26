import React, { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  const navigate=useNavigate();
  useEffect(() => {
    const user=localStorage.getItem("user");
    if(!user)
    navigate("/login")

  }, []);
  return (

    <Box>
      <HeroBanner />
      <SearchExercises   exercises={exercises}  setExercises={setExercises} bodyPart={bodyPart}  setBodyPart={setBodyPart} />
      <Exercises    exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
    </Box>
  )
}

export default Home