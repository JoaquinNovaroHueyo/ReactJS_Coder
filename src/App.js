import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar'; 
import FunctiontalComponent from './components/FunctionalComponent/FunctionalComponent';


function App() {
  return (
    <div className="App">
      
      <NavBar />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FunctiontalComponent titulo="El título de mi página" subtitulo="Subtitulo"/>
      </header>
      
    </div>
  );
}

export default App;
