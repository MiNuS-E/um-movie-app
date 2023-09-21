import MediaCard from "../components/MediaCard";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const MoviesList = ({movies, title}) => {
  return (
    <Box padding={4}>
    <Typography noWrap gutterBottom variant="h3" component="div">
        {title}
        </Typography>  
    <Grid container spacing={2}>
        {movies.map((movie)=>(
          <Grid item lg={3} md={4} sm={6} xs={12} key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
            <MediaCard 
              title = {movie.title}
              overview = {movie.overview}
              posterpath = {movie.poster_path}
            />
            </Link>
          </Grid>
        ))}
      </Grid>
      </Box>  
  );
}

export default MoviesList;
