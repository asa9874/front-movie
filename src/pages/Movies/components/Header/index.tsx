import logo from "../../assets/logo.png";
import Search from '../Search';
import styles from './header.module.css';
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

interface HeaderProps {
  globalState: GlobalState; 
}


function Header({ globalState }: HeaderProps) {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src={logo}></img>
        <Search globalState={globalState}></Search>
      </header>
    </>
  )
}

export default Header
