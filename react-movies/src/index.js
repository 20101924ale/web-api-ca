import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import TrendingMoviesPage from "./pages/trendingMoviesPage";
import Recommended from "./pages/recommendedMoviesPage";  
import SiteHeader from './components/siteHeader';

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/reviews/:id" element={<MovieReviewPage />} />
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/movies/trending" element={<TrendingMoviesPage />} />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/movies/recommendations" element={<Recommended />} /> 
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
