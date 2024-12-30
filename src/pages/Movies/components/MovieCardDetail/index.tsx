import React, { useEffect, useState } from "react";
import { getMovieDetail } from "../../apis/getMovieApis";  
import { MovieDetail } from "../../types/movie";
import styles from './MovieCardDetail.module.css'
import star from '../../assets/star.svg'


interface MovieDetailState {
  MovieId: number;  
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MovieDetailProps {
  movieDetailState: MovieDetailState;
}

function MovieCardDetail({ movieDetailState }: MovieDetailProps) {
  const [movieData, setMovieData] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      setLoading(true);
      try {
        const data = await getMovieDetail(movieDetailState.MovieId); 
        setMovieData(data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
        setMovieData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [movieDetailState.MovieId]); 

  if (loading) {
    return <div className="modal">Loading...</div>;
  }

  if (!movieData) {
    return <div className="modal">Failed to load movie details.</div>;
  }
  function closemodal(){
    console.log("닫아")
    movieDetailState.setShowModal(false)
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modalbackground}></div>
      <div className={styles.modalcontentbox}>
        <div className={styles.modalheader}>
          <div className={styles.modalclosex} onClick={closemodal}>X</div>
          <span className={styles.modaltitle}>{movieData.title}</span>
        </div>
        <div className={styles.modalmoviemain}>
            <img className={styles.modalmovieimg} src={movieData.backdrop_path}></img>
            <div className={styles.modalmoviedetailbox}>
                <div className={styles.modalmoviegenre}>{movieData.genres.map((genre) => genre.name).join(", ")}<img className={styles.star} src={star}/>{movieData.vote_average}</div>
                <div className={styles.modalmoviedescription}>{movieData.overview}</div>
                <div className={styles.modalvotebox}>
                    <span>내 별점</span>
                    <img className={styles.star} src={star}/>
                    <img className={styles.star} src={star}/>
                    <img className={styles.star} src={star}/>
                    <img className={styles.star} src={star}/>
                    <img className={styles.star} src={star}/>
                    <span>6</span>
                    <span>보통이에요</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCardDetail;
