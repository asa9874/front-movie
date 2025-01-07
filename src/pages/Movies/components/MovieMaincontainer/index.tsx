import { useEffect, useState } from 'react';
import MovieMoreButton from '../MovieMoreButton'
import styles from './MovieMainContainer.module.css'
import { Movie } from '../../types/movie';

import MovieCard from '../MovieCard';
import { getMovie, getSearchMovie } from '../../apis/getMovieApis';
import { useStore } from '../../context';


function MovieMainContainer() {
  const [movies, setMovies] = useState<Movie[]>([]);
  // Context 호출
  const { 
    searchClicked, 
    searched, 
    searchString, 
    page 
  } = useStore();

  //검색시 영화초기화
  useEffect(() => {
    setMovies([]);
    console.log("영화추가 : 영화초기화")
    fetchMovies();
  }, [searchClicked]);

  //영화추가
  useEffect(() => {
    if(page!=1) fetchMovies();
  }, [page]);

  const fetchMovies = async () => {
    if (searched) {//검색됨
      const Movies = await getSearchMovie(page, searchString);
      setMovies((prevMovies) => [...prevMovies, ...Movies]); // 기존 영화에 추가
      console.log("영화추가 : <<"+searchString+">> 검색영화추가");
    } 
    else {// 인기 영화
      const Movies = await getMovie(page);
      setMovies((prevMovies) => [...prevMovies, ...Movies]); // 기존 영화에 추가
      console.log("영화추가 : 인기영화추가");
    }
  };




    return (
      <>    
        <div className={styles.maincontainer}>
            {(searched) && (
                <p className={styles.maintitle}>"{searchString}" 검색결과</p>
            )}
            {(!searched) && (
                <p className={styles.maintitle}>지금 인기있는 영화</p>
            )}
            <div className={styles.moviecontainer}>
            {movies?.map((movie, index) => (
              <MovieCard key={`${movie.id}-${index}`} {...movie} />
            ))}
            </div>
            {(movies?.length % 20 === 0) && (
              <MovieMoreButton/>
            )}
        </div>
      </>
    )
}

export default MovieMainContainer


