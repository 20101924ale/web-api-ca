import React from "react";
import { useQuery } from "@tanstack/react-query";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { getTrendingMovies } from "../api/tmdb-api";

const TrendingMoviesPage = () => {
  const { data: movies, isLoading, isError, error } = useQuery({
    queryKey: ["trending", "day"], // unique key for caching
    queryFn: () => getTrendingMovies("day"), // fetch function
    staleTime: 1000 * 60 * 5, // 5 minutes caching before re-fetch
    cacheTime: 1000 * 60 * 30 // 30 minutes in cache
  });

  if (isLoading) return <p>Loading trending movies...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div style={{ padding: 20 }}>
      <MovieListPageTemplate movies={movies} title="Trending Movies" />
    </div>
  );
};

export default TrendingMoviesPage;
