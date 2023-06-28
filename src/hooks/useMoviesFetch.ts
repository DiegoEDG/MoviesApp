import {useState, useEffect} from 'react';
import moviesApi from '../api/movies';
import {MoviesApiResponse, Movie} from '../interfaces';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

const useMoviesFetch = () => {
  const [movies, setMovies] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchMovies = async () => {
    const nowPlayingPromise = moviesApi.get<MoviesApiResponse>('/now_playing');
    const popularPromise = moviesApi.get<MoviesApiResponse>('/popular');
    const topRatedPromise = moviesApi.get<MoviesApiResponse>('/top_rated');
    const UpcomingPromise = moviesApi.get<MoviesApiResponse>('/upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      UpcomingPromise,
    ]);

    setMovies({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return {
    ...movies,
    isLoading,
  };
};

export default useMoviesFetch;
