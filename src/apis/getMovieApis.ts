// apis 폴더에 원하는 api 파일을 만들어 api 함수를 작성하세요.
// 해당 getExample.ts 파일은 삭제하고 직접 파일명을 고려해서 파일을 생성하세요.
//https://developer.themoviedb.org/reference/search-movie
//검색
//'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'
import { BASE_URL, IMAGE_URL } from '../constants/index';
import { Movie } from '../types/movie';
//리스트
//https://api.themoviedb.org/3/

export function getMovie(page: number): Promise<Movie[]>{
  const Baseurl = BASE_URL + "movie/top_rated?api_key=" + process.env.API_KEY + "&language=en-US&page=" + page;
  return getMovieAPi(page,Baseurl)
}

export function getSearchMovie(page: number, searchString: string): Promise<Movie[]>{
  const url = BASE_URL + 'search/movie?api_key=' + process.env.API_KEY + '&query=' + searchString + '&include_adult=false&language=en-US&page=' + page;
  return getMovieAPi(page,url)
}





export function getMovieAPi(page: number, url: string): Promise<Movie[]> {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    }
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(json => {
      const movies: Movie[] = json.results.map((item: any) => ({
        adult: item.adult,
        backdrop_path: IMAGE_URL+item.backdrop_path,
        genre_ids: item.genre_ids,
        id: item.id,
        original_language: item.original_language,
        original_title: item.original_title,
        overview: item.overview,
        popularity: item.popularity,
        poster_path: item.poster_path,
        release_date: item.release_date,
        title: item.title,
        video: item.video,
        vote_average: item.vote_average,
        vote_count: item.vote_count,
      }));
      console.log(movies)
      return movies;
    })
    .catch(err => {
      console.error(err);
      return []; 
    });
}

