const baseUrl = "https://api.themoviedb.org/3";
const apiKey = process.env.REACT_APP_TMDB_KEY;
const defaultParams = `api_key=${apiKey}&language=en-US`;

// Get all movies (discover)
export const getMovies = () => {
  return fetch(`${baseUrl}/discover/movie?${defaultParams}&include_adult=false&page=1`)
    .then(res => res.json())
    .then(json => json.results);
};

// Get movie details by ID
export const getMovie = (id) => {
  return fetch(`${baseUrl}/movie/${id}?api_key=${apiKey}`)
    .then(res => res.json());
};

// Get genres
export const getGenres = () => {
  return fetch(`${baseUrl}/genre/movie/list?${defaultParams}`)
    .then(res => res.json())
    .then(json => json.genres);
};

// Get movie images by movie ID
export const getMovieImages = (id) => {
  return fetch(`${baseUrl}/movie/${id}/images?api_key=${apiKey}`)
    .then(res => res.json())
    .then(json => json.posters);
};

// Get movie reviews by movie ID
export const getMovieReviews = (id) => {
  return fetch(`${baseUrl}/movie/${id}/reviews?api_key=${apiKey}`)
    .then(res => res.json())
    .then(json => json.results);
};

// New: Get upcoming movies
export const getUpcomingMovies = () => {
  return fetch(`${baseUrl}/movie/upcoming?${defaultParams}`)
    .then(res => res.json())
    .then(json => json.results);
};

// Get now playing movies
export const getNowPlayingMovies = () => {
  return fetch(`${baseUrl}/movie/now_playing?${defaultParams}`)
    .then(res => res.json())
    .then(json => json.results);
};

export const getTrendingMovies = (timeWindow = "day") => {
    return fetch(`${baseUrl}/trending/movie/${timeWindow}?${defaultParams}`)
      .then(res => res.json())
      .then(json => json.results);
  };

// Get movie recommendations by movie ID
export const getMovieRecommendations = (id) => {
    return fetch(
      `${baseUrl}/movie/${id}/recommendations?${defaultParams}`
    )
      .then(res => res.json())
      .then(data => data.results);  // <-- return only the results array
  };
  
  // Get movie credits by movie ID
  export const getMovieCredits = (movieId) => {
    return fetch(
      `${baseUrl}/movie/${movieId}/credits?${defaultParams}`
    )
      .then(res => res.json());
  };
  
  