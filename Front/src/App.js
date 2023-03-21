import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import styles from "./App.css";
import {useState, useEffect} from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';

function App () {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const username = "navajero13@gmail.com";
  const password = "kevin123";

  const login = (userData) =>{
    if(userData.username === username && userData.password === password){
      setAccess(true)
      navigate("/home");
    }
  } 

  useEffect(() => {
    !access && navigate("/");
  },[access])
  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
    .then((response) => response.json())
    .then((data) => {
       if (data.id) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    })
    .catch(error => console.log(error));
  }
  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }
  return (
    <div className = {styles.App}>
      {location.pathname === "/" ? <Form login={login}/> : <Nav onSearch={onSearch}/>}
      <Routes>
        <Route path="/home" element={<Cards onClose={onClose} characters={characters}/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/detail/:detailId" element={<Detail/>}></Route>
        <Route path = "/favorites" element={<Favorites/>}></Route>
      </Routes>
    </div>  
  )
}

export default App
