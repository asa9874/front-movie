import logo from "../../assets/logo.png";
import Search from '../Search';
import styles from './header.module.css';


function Header() {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src={logo}></img>
        <Search></Search>
      </header>
    </>
  )
}

export default Header
