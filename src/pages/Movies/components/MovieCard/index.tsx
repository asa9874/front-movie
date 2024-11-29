import { Movie } from '../../types/movie';
import './movieCard.css'
import star from '../../assets/star.svg'
function MovieCard(props: Movie) {
  return (
    <div className="movie-card">
      <img className="movie-img" src={props.backdrop_path} alt={props.title} />
      <p className="movie-title">{props.title}</p>
      <p className="movie-rating">
        {props.vote_average}
        <img className="star" src={star} />
      </p>
    </div>
  );
}

export default MovieCard


