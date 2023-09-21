import { useEffect, useState } from "react";
import axios from "axios";
import https from "../utils/https";
import Button from '@mui/material/Button';
import { Movie, ToggleOff } from "@mui/icons-material";
import MediaCard from "../components/MediaCard";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import MoviesList from "../components/MoviesList";
import useMovieStore from "../stores/movieStore";

const HomePage = () => {
  // const[togglebtn,setToggleBtn] = useState(false);
  // const[popularMovies,setPopularMovies] = useState([]);
  const popularMovies = useMovieStore((state) => state.popularMovies);
  const getPopularMovies = useMovieStore((state)=> state.getPopularMovies)

  useEffect(() =>{
    
    fetchPopularMovies();
    console.log('Second use effect');
  },[]);

  const fetchPopularMovies = async () => {
      try{
        await getPopularMovies();
        return 'success';
     
      } catch(err){
        // handle error
      }  finally {
        // executed if success or fail
      }
    }
  return (
    <div className="App">
      <MoviesList
        movies={popularMovies}
        title= 'Popular Movies'
      />
    </div>
  );
}

export default HomePage;
