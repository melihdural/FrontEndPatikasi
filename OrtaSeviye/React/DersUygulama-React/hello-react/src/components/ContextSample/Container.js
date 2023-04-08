import ContextHeader from "./components/ContextHeader";
import {useTheme} from "./context/ThemeContext";
import Profile from "./components/Profile";

function Container() {
    const {theme} = useTheme()

    return(
        <div className={`app ${theme}`}>
            <ContextHeader />
            <hr />
            <Profile />
        </div>
    );
}

export default Container