import { Movie } from '../../types/movie';
import './movieCard.css'
import star from '../../assets/star.svg'
import MovieDetail from '../MovieCardDetail'; 
import { useEffect, useState } from 'react';

function MovieCard(props: Movie) {
  const [showModal, setShowModal] = useState(false); // 모달 상태
  useEffect(() => {
      console.log("시")
    }, [showModal]); 
  const movieDetailState = { MovieId: props.id, setShowModal };
  
  return (
    <div className="movie-card" onClick={()=>{setShowModal(true)}}>
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


