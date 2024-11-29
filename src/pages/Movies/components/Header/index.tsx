import logo from "../../assets/logo.png";
import Search from '../Search';
import './header.css';
interface GlobalState {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  searched: boolean;
  setSearched: React.Dispatch<React.SetStateAction<boolean>>;
  searchString: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
}

interface HeaderProps {
  globalState: GlobalState; 
}


function Header({ globalState }: HeaderProps) {
  return (
    <>
      <header>
        <img className="logo" src={logo}></img>
        <Search  globalState={globalState}></Search>
      </header>
    </>
  )
}

export default Header
