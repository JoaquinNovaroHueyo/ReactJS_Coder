import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Form from './components/Form/Form';
import CicloVida from './components/CicloVida/CicloVida';
import ItemList from './components/ItemList/ItemList';



function App() {
  const [contador, setContador] = useState(0);
  const suma = () => {
    setContador(contador + 1);
  }
  const resta = () => {
    setContador(contador - 1);
  }


  return (
    <div>
      <header>
        <NavBar />

      </header>
        <CicloVida numero={contador} />
        <button onClick={suma}>+</button>
        <button onClick={resta}>-</button>


        <ItemListContainer greeting="Greeting" />


        <Form />



    </div>
  );
}

export default App;
