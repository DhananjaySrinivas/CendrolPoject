const MovieCard = ({ movie_name, director, poster, ratings, runtime }) => {
  return (
    <div className="card">
      <img src={poster} alt="Movie Poster" />
      <h2 className="text">Name : {movie_name}</h2>
      <h3 className="text">Director : {director}</h3>
      <h4 className="text">Duration : {runtime} minutes</h4>
      <h4 className="text">Ratings : {ratings} &#128947;</h4>
    </div>
  );
};

export default MovieCard;
