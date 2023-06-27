import {useEffect, useState} from 'react';
import moviesApi from '../api/movies';
import {MoviesNowPlaying, Movies} from '../interfaces';

const useMoviesFetch = () => {
  const [moviesNowPlaying, setMoviesNowPlaying] = useState<Movies[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    moviesApi.get<MoviesNowPlaying>('').then(resp => {
      setMoviesNowPlaying(resp.data.results);
    });

    setIsLoading(false);
  }, []);

  return {
    moviesNowPlaying,
    isLoading,
  };
};

export default useMoviesFetch;
