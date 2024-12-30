import React, { useEffect, useState } from "react";
import { getMovieDetail } from "../../apis/getMovieApis"; // API 호출 함수
import { MovieDetail } from "../../types/movie";
import "./modal.css";
import star from '../../assets/star.svg'

interface MovieDetailState {
  MovieId: number; // 영화 ID 
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

  return (
    <div className="modal">
      <div className="modal-background"></div>
      <div className="modal-content-box">
        <div className="modal-header">
          <div className="modal-close-x" onClick={() => movieDetailState.setShowModal(false)}>X</div>
          <span className="modal-title">{movieData.title}</span>
        </div>
        <div className="modal-movie-main">
            <img className="modal-movie-img" src={movieData.backdrop_path}></img>
            <div className="modal-movie-detailbox">
                <div className="modal-movie-genre">{movieData.genres.map((genre) => genre.name).join(", ")}</div>
                <div className="modal-movie-vote"><img className="star" src={star}/>{movieData.vote_average}</div>
                <div className="modal-movie-description">{movieData.overview}</div>
                <div className="modal-myvote">내별점</div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCardDetail;
