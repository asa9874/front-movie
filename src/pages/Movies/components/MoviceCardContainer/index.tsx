import { useEffect, useState } from 'react';
import MovieCard from '../MovieCard';
import './movieCardContainer.css';
import { Movie } from '../../types/movie';
import { getMovie, getSearchMovie } from '../../apis/getMovieApis';

interface GlobalState {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  searched: boolean;
  setSearched: React.Dispatch<React.SetStateAction<boolean>>;
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
  searchClicked : boolean;
  setsearchClicked: React.Dispatch<React.SetStateAction<boolean>>;
}
interface MovieCardContainerProps {
  globalState: GlobalState; 
}


function MovieCardContainer({ globalState }: MovieCardContainerProps) {

  const [movies, setMovies] = useState<Movie[]>([]);

  
  //검색시 영화초기화
  useEffect(() => {
    setMovies([]);
    console.log("영화추가 : 영화초기화")
    fetchMovies();
  }, [globalState.searchClicked]);

  //영화추가
  useEffect(() => {
    if(globalState.page!=1) fetchMovies();
  }, [globalState.page]);

  const fetchMovies = async () => {
    if (globalState.searched) {//검색됨
      const Movies = await getSearchMovie(globalState.page, globalState.searchString);
      setMovies((prevMovies) => [...prevMovies, ...Movies]); // 기존 영화에 추가
      console.log("영화추가 : <<"+globalState.searchString+">> 검색영화추가");
    } 
    else {// 인기 영화
      const Movies = await getMovie(globalState.page);
      setMovies((prevMovies) => [...prevMovies, ...Movies]); // 기존 영화에 추가
      console.log("영화추가 : 인기영화추가");
    }
  };

  return (
    <>
      <div className="movie-container">
      {movies?.map((movie, index) => (
        <MovieCard key={`${movie.id}-${index}`} {...movie} />
      ))}
    </div>
    </>
  )
}

export default MovieCardContainer
  
