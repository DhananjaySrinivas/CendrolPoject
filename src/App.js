import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieList from "./Component/MovieList";
import MovieDetail from "./Component/MovieDetail";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/:Id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
};
export default App;
