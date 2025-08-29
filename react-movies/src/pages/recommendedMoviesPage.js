import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { getMovieRecommendations } from "../api/tmdb-api";

const RecommendedMoviesPage = () => {
  const { id } = useParams();

  const { data: movies = [], isLoading, error } = useQuery({
    queryKey: ["recommendations", id],
    queryFn: () => getMovieRecommendations(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading recommended movies...</p>;
  if (error) return <p>Error loading recommendations.</p>;

  return <MovieListPageTemplate movies={movies} title="Recommended Movies" />;
};

export default RecommendedMoviesPage;
