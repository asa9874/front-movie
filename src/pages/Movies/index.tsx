import { useState } from 'react';
import Header from './components/Header';
import MovieMaincontainer from './components/MovieMaincontainer';
function Movies() {
  const [page, setPage] = useState<number>(1);
  const [searched, setSearched] = useState<boolean>(false);
  const [searchString, setSearchString] = useState<string>('');
  const globalState = {
    page,
    setPage,
    searched,
    setSearched,
    searchString,
    setSearchString,
  };
  return (
    <>
      <Header globalState={globalState}></Header>
      <MovieMaincontainer globalState={globalState}></MovieMaincontainer>
    </>
  )
}

export default Movies
