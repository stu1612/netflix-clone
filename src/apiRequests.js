const API_KEY = process.env.REACT_APP_API_KEY;

export const apiRequests = {
  // /discover/movie?pi_key=${API_KEY}sort_by=popularity.desc&language=en-US
  fetchTrending: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchHighestRating: `/discover/movie?api_key=${API_KEY}&primary_release_year=2022&sort_by=vote_average.desc`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,

  // tv
  fetchTV: `/discover/tv?api_key=${API_KEY}&language=en-US`,
};
