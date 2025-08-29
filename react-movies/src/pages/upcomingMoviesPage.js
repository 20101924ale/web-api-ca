import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";

const UpcomingMoviesPage = () => {
  const { data: movies, isLoading, isError, error } = useQuery({
    queryKey: ["upcomingMovies"], // unique cache key
    queryFn: getUpcomingMovies,
    staleTime: 1000 * 60 * 5, // 5 min before re-fetch
    cacheTime: 1000 * 60 * 30 // stays in cache for 30 min
  });

  if (isLoading) return <p>Loading upcoming movies...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return <PageTemplate title="Upcoming Movies" movies={movies} />;
};

export default UpcomingMoviesPage;
