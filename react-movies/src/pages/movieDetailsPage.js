import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import useMovie from "../hooks/useMovie";
import Credits from "../components/movieCredits"; // import the new component

const MoviePage = (props) => {
  const { id } = useParams();
  const [movie] = useMovie(id);

  return (
    <>
      {movie ? (
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
          <Credits movieId={id} />  
        </PageTemplate>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
