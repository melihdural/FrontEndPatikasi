import './App.css';
import {WeatherProvider} from "./context/WeatherContext";
import Container from "./components/Container";



function App() {
  return (
    <div className="App">
        <div className={"container"}>
            <div className={"row"}>
                <WeatherProvider>
                    <Container />
                </WeatherProvider>
            </div>
        </div>
    </div>
  );
}

export default App;
