import {ThemeProvider} from "./context/ThemeContext";
import Container from "./Container";
import {UserProvider} from "./context/UserContext";

function ContextSample() {
    return(
        <ThemeProvider>
            <UserProvider>
                <Container />
            </UserProvider>
        </ThemeProvider>
    );
}

export default ContextSample