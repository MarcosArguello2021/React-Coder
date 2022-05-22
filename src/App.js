import './App.css';
import * as bootstrap from 'bootstrap';
import { Navbar } from './components/Navbar/Navbar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import { Container } from './components/Container/Container';

function App() {

  const usuario = {
  nombre: "Marcos",
  rol: "Usuario"
}
  
  return (
    <div>
      <Navbar/>
      <ItemListContainer nombre={usuario.nombre}/>
    </div>
  );
}

export default App;
