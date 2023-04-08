import {useTheme} from "../context/ThemeContext";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/fontawesome-free-solid'

function ButtonTheme() {
    const { theme, setTheme } = useTheme();


    return(
        <div className={"form-check form-switch"}>
            <input
                onClick={()=> setTheme(theme === "dark" ? "light" : "dark")}
                className={"form-check-input"}
                type={"checkbox"} role={"switch"}
                id={"flexSwitchCheckDefault"}/>
            <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
            >
                {theme === "dark" ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
            </label>
        </div>
    );
}

export default ButtonTheme