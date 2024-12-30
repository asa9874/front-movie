import styles from './movieMoreButton.module.css'

interface GlobalState {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

interface MovieMoreButtonProps {
  globalState: GlobalState; 
}

function MovieMoreButton({ globalState }: MovieMoreButtonProps) {
    return (
      <>
        <button className={styles.morebutton} onClick={() =>globalState.setPage(globalState.page+1)}>더보기</button>
      </>
    )
}

export default MovieMoreButton
  