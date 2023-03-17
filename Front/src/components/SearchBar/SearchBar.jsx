import styles from './SearchBar.module.css';
import {useState} from 'react';
function SearchBar({onSearch}) {
   const [character, setCharacter] = useState('')

   const handleChange = (evento) =>{
      setCharacter(evento.target.value)
   }
   return (
      <div className ={styles.divSearchBar}>
         <input type='search' value={character} onChange = {handleChange}/>
         <button onClick={() => onSearch(character)}>Agregar</button>
      </div>
   );
}

export default SearchBar;