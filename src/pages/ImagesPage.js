import { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";
import https from "../utils/https";
import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material";
import MediaCard from "../components/MediaCard";

const ImagesPage = () =>{
    const params = useParams();
    const[backdropsMovies,setBackdropsMovies] = useState([]);
    
    console.log('params =>',params);

    useEffect(() =>{
      fetchImagesMovies();
      console.log('Second use effect');
    },[]);
  
    const fetchImagesMovies = async () => {
        try{
          const resp = await https.get(`/movie/${params.id}/images`)
          setBackdropsMovies(resp.data.backdrops);
          console.log('resp =>', resp);
          console.log('resp.data =>', resp.data);
  
        return 'success';
        } catch(err){
          // handle error
        }  finally {
          // executed if success or fail
        }
      }
    
    if(!backdropsMovies){
        return(
            <div>Loading ..</div>
        )
    }

    return (
      <div className="App">
        <Box padding={4}>
        <Typography noWrap gutterBottom variant="h3" component="div">
            Backdrops
            </Typography>  
        <Grid container spacing={2}>
            {backdropsMovies.map((movie)=>(
            <Grid item lg={3} md={4} sm={6} xs={12} key={movie.id}>
                 <Card>
    
            <CardActionArea> 
                <CardMedia
                sx={{ height: 350 }}
                image= {`https://image.tmdb.org/t/p/w500/${movie.file_path}`}
                />
                </CardActionArea>
            </Card>
            </Grid>
            ))}
        </Grid>
        </Box>  
      </div>
    );
}

export default ImagesPage;