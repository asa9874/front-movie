import { Movie } from "../../types/movie";
import './modal.css'

interface MovieDetailState{
    movieState: Movie;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MovieDetailProps {
    movieDetailState: MovieDetailState; 
}   
  


  function MovieDetail({ movieDetailState }: MovieDetailProps) {
    return (
    <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-content-box">
            <div className="modal-header">
                <div className="modal-close-x">X</div>
                <span className="modal-title">{movieDetailState.movieState.title}</span>
            </div>
            <img className="modal-movie-img" src={movieDetailState.movieState.backdrop_path}></img>
            <div className="modal-movie-Description">
                <div className="modal-movie-genue"></div>
                <div className="modal-movie-vote">{movieDetailState.movieState.vote_average}</div>
                <div className="modal-myvote"></div>
            </div>
        </div>
    </div>
    );
  }
  
  export default MovieDetail
  