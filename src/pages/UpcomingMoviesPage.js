import { useEffect, useState } from "react";
import https from "../utils/https";
import MoviesList from "../components/MoviesList";
import useMovieStore from "../stores/movieStore";

function UpcomingMoviesPage() {
    // const[togglebtn,setToggleBtn] = useState(false);
    // const[upcomingMovies,setUpcomingMovies] = useState([]);
    const upcomingMovies = useMovieStore((state) => state.upcomingMovies);
    const getUpcomingMovies = useMovieStore((state)=> state.getUpcomingMovies)


    useEffect(() =>{
    fetchUpcomingMovies();
    console.log('Second use effect');
    },[]);

    const fetchUpcomingMovies = async () => {
        try{
            await getUpcomingMovies();
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
        movies={upcomingMovies}
        title= 'Upcoming Movies'
      />
    </div>
    );
}

export default UpcomingMoviesPage;
