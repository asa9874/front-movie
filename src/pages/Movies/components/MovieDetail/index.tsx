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
            <div className="modal-close-x">X</div>
            <span className="modal-title subtitle">🏆당첨통계🏆</span>
            <table className="result-table">
            </table>
            <span className="profit">당신의 총 수익률은 %입니다.</span>
            <button className="restart caption" type="submit">다시 시작하기</button>
        </div>
    </div>
    );
  }
  
  export default MovieDetail
  