import { useGlobalState } from '../../context';
import styles from './movieMoreButton.module.css'


function MovieMoreButton() {
  const { page, setPage } = useGlobalState();
    return (
      <>
        <button className={styles.morebutton} onClick={() =>setPage(page+1)}>더보기</button>
      </>
    )
}

export default MovieMoreButton
  