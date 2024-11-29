import { useEffect } from 'react';
import MovieCard from '../MovieCard';
import './movieCardContainer.css';

interface GlobalState {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  searched: boolean;
  setSearched: React.Dispatch<React.SetStateAction<boolean>>;
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
}

interface MovieCardContainerProps {
  globalState: GlobalState; 
}


function MovieCardContainer({ globalState }: MovieCardContainerProps) {

    useEffect(() => {
      console.log(globalState.page);
    }, [globalState.page]);

    //
    useEffect(() => {
      console.log(globalState.searched);
    }, [globalState.searched]);

    return (
      <>
        <div className="movie-container">
          <MovieCard></MovieCard>
         </div>
      </>
    )
}

export default MovieCardContainer
  