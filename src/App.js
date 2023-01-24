import React from "react";
import CategoryPage from "./@pages/CategoryPage/CategoryPage";
import DetailsPage from "./@pages/DetailPage/DetailsPage";
import FilmsPage from "./@pages/FilmPage/FilmsPage";
import HomePage from "./@pages/HomePage/HomePage";
import SeriesPage from "./@pages/SeriesPage/SeriesPage";
import SubscribePage from "./@pages/SubscribePage/SubscribePage";

export const App = () => {
  return (
    <div>
      <HomePage />
      <DetailsPage />
      <FilmsPage />
      <SeriesPage />
      <CategoryPage />
      <SubscribePage />
    </div>
  );
};

export default App;
