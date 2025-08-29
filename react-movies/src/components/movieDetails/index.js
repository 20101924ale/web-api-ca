import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../movieReviews";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";

const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = ({ movie }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  if (!movie) return <p>Loading movie details...</p>; // safe fallback

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview || "No overview available."}
      </Typography>

      {movie.genres && movie.genres.length > 0 && (
        <Paper component="ul" sx={{ ...root }}>
          <li>
            <Chip label="Genres" sx={{ ...chip }} color="primary" />
          </li>
          {movie.genres.map((g) => (
            <li key={g.name}>
              <Chip label={g.name} sx={{ ...chip }} />
            </li>
          ))}
        </Paper>
      )}

      <Paper component="ul" sx={{ ...root }}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime || "N/A"} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={movie.revenue ? movie.revenue.toLocaleString() : "N/A"}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average || "N/A"} (${movie.vote_count || "0"})`}
        />
        <Chip label={`Released: ${movie.release_date || "N/A"}`} />
      </Paper>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={{
          position: "fixed",
          bottom: "1em",
          right: "1em",
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>

      <Drawer anchor="top" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};

export default MovieDetails;
