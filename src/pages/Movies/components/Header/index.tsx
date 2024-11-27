import logo from "../../assets/logo.png"
import Search from '../Search'
import './header.css'

function Header() {
  return (
    <>
      <header>
        <img className="logo" src={logo}></img>
        <Search></Search>
      </header>
    </>
  )
}

export default Header
