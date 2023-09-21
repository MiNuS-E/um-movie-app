import { useEffect, useState } from "react";
import axios from "axios";
import https from "./utils/https";
import Button from '@mui/material/Button';
import { Movie, ToggleOff } from "@mui/icons-material";
import MediaCard from "./components/MediaCard";
import { Box, Grid } from "@mui/material";

function App() {
  const[togglebtn,setToggleBtn] = useState(false);
  const[popularMovies,setPopularMovies] = useState([]);


  // useEffect(() =>{
  //   fetch('https://api.themoviedb.org/3/movie/popular',{
  //     method: 'get',
  //     headers: {
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZGQ3ZWZiODA4MmVhNzJiY2U0Njg2YzdkZjlhNGJjYSIsInN1YiI6IjY1MGE0OWRlODFjN2JlMDEzYWYxMmFjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2cmY2T_lJGs6MIjdqeMAhiHIBGxm7iIasgncKKaKsSo',
  //       'Content-Type': 'application/json',  
  //       }
  //     }).then((resp) => {
  //         //success
  //         resp.json().then((data) => {
  //         console.log(data);
  //         })  
  //     }).catch((error) => {
  //         //fail
  //         console.log(error);
  //     }).finally(() => {
  //       //exe weater fail or successs
  //       console.log('finally');
  //     })  
  //   },[]);

  useEffect(() =>{
    fetchPopularMovies();
    console.log('Second use effect');
  },[]);

  const fetchPopularMovies = async () => {
      try{
        const resp = await https('/movie/popular')
        setPopularMovies(resp.data.results);
        console.log('resp =>', resp);
        console.log('resp.data =>', resp.data);

      return 'success';
      } catch(err){
        // handle error
      }  finally {
        // executed if success or fail
      }
    }
  return (
    <div className="App">
    <Box padding={4}>
    <Grid container spacing={2}>
        {popularMovies.map((movie)=>(
          <Grid item lg={3} md={4} sm={6} xs={12} key={movie.id}>
            <MediaCard 
              title = {movie.title}
              overview = {movie.overview}
              posterpath = {movie.poster_path}
            />
          </Grid>
        ))}
      </Grid>
      </Box>  
    {/* <div>
    <Button variant="contained" disableElevation>
    Disable elevation
    </Button>
    </div> */}
    </div>
  );
}

export default App;
