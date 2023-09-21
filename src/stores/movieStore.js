import { create } from 'zustand'
import https from '../utils/https';

const useMovieStore = create((set) => ({
 popularMovies:[],
 upcomingMovies:[],
 
 getPopularMovies: async () => {
    const resp = await https('/movie/popular');
    set({popularMovies:[...resp.data.results]});
    return resp; 
 },
  
 getUpcomingMovies: async () => {
    const resp = await https('/movie/upcoming');
    set({upcomingMovies:[...resp.data.results]});
    return resp; 
 }
}));

export default useMovieStore;