import MovieCardContainer from '../MoviceCardContainer'
import MovieMoreButton from '../MovieMoreButton'
import './movie.css'

function MovieMainContainer() {
    return (
      <>
        <div className="main-container">
            <p className="main-title">지금 인기있는 영화</p>
            <MovieCardContainer></MovieCardContainer>
            <MovieMoreButton></MovieMoreButton>
        </div>
      </>
    )
}

export default MovieMainContainer
