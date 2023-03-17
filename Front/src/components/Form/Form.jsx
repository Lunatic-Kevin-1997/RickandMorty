import { useState } from "react";
import styles from "./Form.module.css";
import validation from "./validation";
const Form = ({login}) => {

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })
    const handleInputChange = (evento) => {
        setUserData({
            ...userData,
            [evento.target.name] : evento.target.value
        })
        setErrors(validation({
            ...userData,
            [evento.target.name] : evento.target.value
        }))
    }
    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })
    const handleSubmit = (evento) => {
        evento.preventDefault();
        login(userData)
    }
    return(
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.div}>    
                <label htmlFor="username">Username:</label>
                <input type="text" name="username" value={userData.username} onChange={handleInputChange}/>
                {errors.username && <p>{errors.username}</p>}
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={userData.password} onChange=          {handleInputChange}/>
                {errors.password && <p>{errors.password}</p>}
                <button>Login</button>
            </div>
        </form>
    )
}
export default Form;