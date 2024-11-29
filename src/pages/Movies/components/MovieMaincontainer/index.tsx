import MovieCardContainer from '../MoviceCardContainer'
import MovieMoreButton from '../MovieMoreButton'
import './movie.css'

import { getMovie, getSearchMovie } from "../../apis/getMovieApis"
import star from "../../assets/star.svg"
import { Movie } from "../../types/movie"
import { useEffect, useState } from 'react'


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
  
interface MovieMainContainerProps {
    globalState: GlobalState; 
}


function MovieMainContainer({ globalState }: MovieMainContainerProps) {
    
    return (
      <>    
        <div className="main-container">
            {(globalState.searched) && (
                <p className="main-title">"{globalState.searchString}" 검색결과</p>
            )}
            {(!globalState.searched) && (
                <p className="main-title">지금 인기있는 영화</p>
            )}
            <MovieCardContainer globalState={globalState}></MovieCardContainer>
            <MovieMoreButton globalState={globalState}></MovieMoreButton>
        </div>
      </>
    )
}

export default MovieMainContainer


