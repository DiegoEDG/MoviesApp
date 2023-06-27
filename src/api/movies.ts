import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGI2ZTlmM2MxZjY0NmE4N2IzZWJmM2NlMDQ3M2MyOCIsInN1YiI6IjY0OTk5Y2RhYmJkMGIwMDE0NGY0ZDYzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kbe9q9byUzmuugo0vTeu3uVp2Lm307APllREuIA9KYU';

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/now_playing',
  headers: {Authorization: `Bearer ${token}`},
});

export default moviesApi;
