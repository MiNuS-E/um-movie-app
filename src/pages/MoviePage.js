import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import https from "../utils/https";
import { Box, CardMedia, Grid, Typography } from "@mui/material";
import MediaCard from "../components/MediaCard";

const MoviePage = () =>{
    const params = useParams();
    const[detailsMovies,setDetailsMovies] = useState(null);
    
    console.log('params =>',params);

    useEffect(() =>{
      fetchDetailsMovies();
      console.log('Second use effect');
    },[]);
  
    const fetchDetailsMovies = async () => {
        try{
          const resp = await https.get(`/movie/${params.id}`)
          setDetailsMovies(resp.data);
          console.log('resp =>', resp);
          console.log('resp.data =>', resp.data);
  
        return 'success';
        } catch(err){
          // handle error
        }  finally {
          // executed if success or fail
        }
      }
    
    if(!detailsMovies){
        return(
            <div>Loading ..</div>
        )
    }

    return (
      <div className="App">
      <CardMedia
        sx={{ width:'100%',height: 450 }}
        image= {`https://image.tmdb.org/t/p/original/${detailsMovies.poster_path}`}
        title= {detailsMovies.title}
      />
      
      <Box maxWidth={600} margin='auto'>
       <Grid container spacing={2}>
           <Grid item lg={12} md={12} sm={12} xs={12} key={detailsMovies.id}>
              <MediaCard 
                title = {detailsMovies.title}
                overview = {detailsMovies.overview}
                posterpath = {detailsMovies.poster_path}
              />
              <Link to={`/movie/${detailsMovies.id}/images`}>Media
              </Link>  
            </Grid>
        </Grid>
        </Box>  
      </div>
    );
}

export default MoviePage;