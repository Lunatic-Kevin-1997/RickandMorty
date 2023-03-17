import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import style from "./Detail.module.css";
const Detail = () => {
    const {detailId} = useParams();
    const [character, setCharacter] = useState({
        
    });
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]); 
    return(
        <div className={style.divDetail}>
            <button>
                <Link className= {style.LinkDetail}to="/home">Home</Link>
            </button>
            <div className={style.divDatos}>
              <div className={style.divDatosGenerales}>
                <h1>{character?.name}</h1>
                <p>{character?.status}</p>
                <p>{character?.species}</p>
                <p>{character?.gender}</p>
                <p>{character?.origin?.name}</p>  
              </div>
            </div>
            <img src={character?.image} alt="" />
        </div>
    )
}

export default Detail;