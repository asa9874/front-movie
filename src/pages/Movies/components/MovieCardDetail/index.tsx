import React, { useEffect, useState } from "react";
import { getMovieDetail } from "../../apis/getMovieApis";  
import { MovieDetail } from "../../types/movie";
import "./modal.css";
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
    <div className="modal">
      <div className="modal-background"></div>
      <div className="modal-content-box">
        <div className="modal-header">
          <div className="modal-close-x" onClick={closemodal}>X</div>
          <span className="modal-title">{movieData.title}</span>
        </div>
        <div className="modal-movie-main">
            <img className="modal-movie-img" src={movieData.backdrop_path}></img>
            <div className="modal-movie-detailbox">
                <div className="modal-movie-genre">{movieData.genres.map((genre) => genre.name).join(", ")}<img className="star" src={star}/>{movieData.vote_average}</div>
                <div className="modal-movie-description">{movieData.overview}</div>
                <div className="modal-vote-box">
                    <span>내 별점</span>
                    <img className="star" src={star}/>
                    <img className="star" src={star}/>
                    <img className="star" src={star}/>
                    <img className="star" src={star}/>
                    <img className="star" src={star}/>
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
