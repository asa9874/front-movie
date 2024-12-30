import { Movie } from '../../types/movie';
import styles from './movieCard.module.css'
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
    <div className={styles.movieCard} onClick={()=>{setShowModal(true)}}>
      <img className={styles.movieImg} src={props.backdrop_path} alt={props.title} />
      <p className={styles.movieTitle}>{props.title}</p>
      <p className={styles.movieRating}>
        {props.vote_average}
        <img className={styles.star} src={star} />
      </p>
      {showModal && <MovieDetail movieDetailState={movieDetailState} />}
    </div>
  );
}

export default MovieCard


