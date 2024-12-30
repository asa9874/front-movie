import { Movie } from '../../types/movie';
import './movieCard.css'
import star from '../../assets/star.svg'
import MovieDetail from '../MovieCardDetail'; 
import { useState } from 'react';

function MovieCard(props: Movie) {
  const [showModal, setShowModal] = useState(false); // 모달 상태

  function popMovieDetail() {
    setShowModal(true); // 모달 열기 
  }
  const movieDetailState = { MovieId: props.id, setShowModal };
  
  return (
    <div className="movie-card" onClick={popMovieDetail}>
      <img className="movie-img" src={props.backdrop_path} alt={props.title} />
      <p className="movie-title">{props.title}</p>
      <p className="movie-rating">
        {props.vote_average}
        <img className="star" src={star} />
      </p>
      {showModal && <MovieDetail movieDetailState={movieDetailState} />}
    </div>
  );
}

export default MovieCard


