import { BASE_URL, IMAGE_URL } from '../globals/constants';
import { Movie, MovieDetail } from '../types/movie';

export function getMovie(page: number): Promise<Movie[]>{
  const Baseurl = BASE_URL + "movie/top_rated?api_key=" + import.meta.env.VITE_API_KEY + "&language=ko-KR&page=" + page;
  return getMovieAPi(page,Baseurl)
}


export function getSearchMovie(page: number, searchString: string): Promise<Movie[]>{
  const url = BASE_URL + 'search/movie?api_key=' + import.meta.env.VITE_API_KEY + '&query=' + searchString + '&include_adult=false&language=ko-KR&page=' + page;
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
      //console.log(movies)
      return movies;
    })
    .catch(err => {
      console.error(err);
      return []; 
    });
}

export function getMovieDetail(MovieId: number): Promise<MovieDetail> {
  const Baseurl = BASE_URL + "movie/" + MovieId + "?api_key=" + import.meta.env.VITE_API_KEY + "&language=ko-KR";
  return getMovieDetailAPi(Baseurl);
}

export function getMovieDetailAPi(url: string): Promise<MovieDetail> {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    }
  };

  return fetch(url, options)
    .then(res => res.json())
    .then(json => {
      const movieDetail: MovieDetail = {
        adult: json.adult || false,
        backdrop_path: IMAGE_URL + (json.backdrop_path || ""),
        belongs_to_collection: json.belongs_to_collection || null,
        budget: json.budget || 0,
        genres: json.genres || [],
        homepage: json.homepage || "",
        id: json.id || 0,
        imdb_id: json.imdb_id || "",
        original_language: json.original_language || "N/A",
        original_title: json.original_title || "N/A",
        overview: json.overview || "No overview available.",
        popularity: json.popularity || 0,
        poster_path: IMAGE_URL + (json.poster_path || ""),
        production_companies: json.production_companies || [],
        production_countries: json.production_countries || [],
        release_date: json.release_date || "Unknown",
        revenue: json.revenue || 0,
        runtime: json.runtime || 0,
        spoken_languages: json.spoken_languages || [],
        status: json.status || "Unknown",
        tagline: json.tagline || "",
        title: json.title || "Untitled",
        video: json.video || false,
        vote_average: json.vote_average || 0,
        vote_count: json.vote_count || 0,
      };
      return movieDetail;
    })
    .catch(err => {
      console.error(err);

      // 에러 발생 시 기본값 반환
      const defaultMovieDetail: MovieDetail = {
        adult: false,
        backdrop_path: "",
        belongs_to_collection: null,
        budget: 0,
        genres: [],
        homepage: "",
        id: 0,
        imdb_id: "",
        original_language: "N/A",
        original_title: "N/A",
        overview: "No overview available.",
        popularity: 0,
        poster_path: "",
        production_companies: [],
        production_countries: [],
        release_date: "Unknown",
        revenue: 0,
        runtime: 0,
        spoken_languages: [],
        status: "Unknown",
        tagline: "",
        title: "Untitled",
        video: false,
        vote_average: 0,
        vote_count: 0,
      };

      return defaultMovieDetail;
    });
}