import { useEffect, useState, Suspense, lazy } from 'react';
import MovieMoreButton from '../MovieMoreButton';
import styles from './MovieMainContainer.module.css';
import { Movie } from '../../types/movie';

const MovieCard = lazy(() => import('../MovieCard'));
import { getMovie, getSearchMovie } from '../../apis/getMovieApis';
import { useStore } from '../../context';
import { useQuery } from '@tanstack/react-query';

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
    setMovies([]); // 검색 클릭 시 기존 영화 리스트 초기화
    fetchMovies();  // 영화 데이터 가져오기
  }, [searchClicked]);

  //영화 추가
  useEffect(() => {
    if(page !== 1) fetchMovies();  // 페이지가 1이 아닐 경우 추가 데이터 가져오기
  }, [page]);

  // fetchMovies 함수 정의
  const fetchMovies = async () => {
    if (searched) { // 검색된 경우
      const Movies = await getSearchMovie(page, searchString);
      setMovies((prevMovies) => [...prevMovies, ...Movies]); // 기존 영화에 추가
      return Movies
    } else { // 인기 영화일 경우
      const Movies = await getMovie(page);
      setMovies((prevMovies) => [...prevMovies, ...Movies]); // 기존 영화에 추가
      return Movies
    }
  };

  // Tanstack Query
  const { isLoading, isError } = useQuery({
    queryKey: ["movies", page, searched, searchString],
    queryFn: fetchMovies, // fetchMovies 함수로 데이터 가져오기
    enabled: searchClicked !== undefined, // 검색 클릭 시에만 실행
  });

  

  // 사용 예시
  if (isLoading) {
    return <p>로딩 중</p>;
  } else if (isError) {
    return <p>에러가 발생</p>;
  } else {
    return (
      <div className={styles.maincontainer}>
        {(searched) && (
          <p className={styles.maintitle}>"{searchString}" 검색결과</p>
        )}
        {(!searched) && (
          <p className={styles.maintitle}>지금 인기 있는 영화</p>
        )}
        <div className={styles.moviecontainer}>
        {movies?.map((movie: Movie, index: number) => (  
          <Suspense key={`${movie.id}-${index}`} fallback={<div className={styles.loadingcard}/>}>
            <MovieCard {...movie} />
          </Suspense>
        ))}
      </div>
      {(movies?.length !== undefined && movies.length % 20 === 0) && (
        <MovieMoreButton/>
      )}
    </div>
    );
  }
}

export default MovieMainContainer;
