import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieCredits } from "../../api/tmdb-api";
import TemplateMoviePage from "../templateMoviePage";

const Credits = ({ movieId }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["credits", movieId],
    queryFn: () => getMovieCredits(movieId),
    enabled: !!movieId,
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });

  if (isLoading) return <p>Loading credits...</p>;
  if (error) return <p>Error loading credits.</p>;
  if (!data) return null;

  const { cast = [], crew = [] } = data;

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.slice(0, 10).map(member => (
          <li key={member.cast_id}>
            {member.name} as {member.character}
          </li>
        ))}
      </ul>

      <h2>Crew</h2>
      <ul>
        {crew.slice(0, 10).map(member => (
          <li key={member.credit_id}>
            {member.name} - {member.job}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Credits;
