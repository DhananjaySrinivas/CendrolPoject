import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MovieActions } from "../Store/Store";
import MovieCard from "./MovieCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, allMovies) {
  const filterData = allMovies.filter((res) =>
    res?.movie_name?.includes(searchText)
  );
  return filterData;
}

const MovieList = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const data = await fetch("db.json");
    const json = await data.json();
    json.forEach((value) => dispatch(MovieActions.AddMovies(value)));
    setAllMovies(json);
    setFilteredMovies(json);
  };

  return filteredMovies?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <input
          type="text"
          className="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="btn"
          onClick={() => {
            const data = filterData(searchText, allMovies);
            setFilteredMovies(data);
            setSearchText("");
          }}
        >
          Search
        </button>
      </div>
      <div className="Movie-list">
        {filteredMovies.map((value) => {
          return (
            <Link key={value.movie_id} to={"/" + value.movie_id}>
              <MovieCard {...value} />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default MovieList;
