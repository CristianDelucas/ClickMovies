import React from "react";
import CategoryPage from "./@pages/CategoryPage";
import DetailsPage from "./@pages/DetailsPage";
import FilmsPage from "./@pages/FilmsPage";
import HomePage from "./@pages/HomePage";
import SeriesPage from "./@pages/SeriesPage";
import SubscribePage from "./@pages/SubscribePage";

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
