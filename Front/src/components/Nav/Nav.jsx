import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";
const Nav = ({onSearch}) =>{
    return(
        <nav className={style.Nav}>
            <div className={style.NavDiv}>
                <Link to="/"><button>LOGOUT</button></Link>
                <Link to="/about"><button>ABOUT</button></Link>
                <Link to="/home"><button>HOME</button></Link>
                <Link to="/favorites"><button>FAVORITES</button></Link>
            </div>
            <SearchBar onSearch = {onSearch}/>
        </nav>
    )
}

export default Nav;