import './App.css';
import Header from "./components/Header"

function App() {
  return (
    <div>
      <Header />
        <p className="pargraph">Lorem ipsum dolor sit amet.</p>
        
        <label htmlFor="">
            Name
            <input id="myInput"/>
        </label>
    </div>
  );
}

export default App;