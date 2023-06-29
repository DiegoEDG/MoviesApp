import moviesApi from '../api/movies';
import {useState, useEffect} from 'react';
import {Cast, MovieCredits, MovieDetails} from '../interfaces';

interface State {
  isLoading: boolean;
  movieDetails?: MovieDetails;
  cast: Cast[];
}

const useMovieDetails = (movieID: number) => {
  const [movieState, setMovieState] = useState<State>({
    isLoading: true,
    movieDetails: undefined,
    cast: [],
  });

  const fetchDetails = async (movieID: Number) => {
    const movieDetailsPromise = await moviesApi.get<MovieDetails>(
      `/${movieID}`,
    );
    const castPromise = await moviesApi.get<MovieCredits>(
      `/${movieID}/credits`,
    );

    const [movieDetailsResp, castResp] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);

    setMovieState({
      isLoading: false,
      movieDetails: movieDetailsResp.data,
      cast: castResp.data.cast,
    });
  };

  useEffect(() => {
    fetchDetails(movieID);
  }, []);

  return {
    ...movieState,
  };
};

export default useMovieDetails;
