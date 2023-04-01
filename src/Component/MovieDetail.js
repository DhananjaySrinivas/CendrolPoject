import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
const MovieDetail = () => {
  const [Movies, setMovies] = useState([]);
  const json = useSelector((state) => state.AllMovies);
  const params = useParams();
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const filterData = json.filter(
      (res) => res.movie_id.toString() === params.Id.toString()
    );
    console.log(json);
    setMovies(filterData);
  };

  return (
    <section className="detail-card">
      {Movies.map((value) => {
        return (
          <div key={value.movie_id}>
            <img src={value.poster} alt="Movie Poster" />
            <h2 className="text">Name : {value.movie_name}</h2>
            <h3 className="text">Director : {value.director}</h3>
            <h4 className="text">Description : {value.description}</h4>
            <h4 className="text">Duration : {value.runtime} minutes</h4>
            <h4 className="text">Ratings : {value.ratings} &#128947;</h4>
            <h4 className="text"> Release Date : {value.release_date}</h4>
          </div>
        );
      })}
      <Link to="/">
        <button className="btn"> Back</button>
      </Link>
    </section>
  );
};

export default MovieDetail;
