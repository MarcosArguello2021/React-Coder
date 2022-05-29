import './App.css';
import * as bootstrap from 'bootstrap';
import { Navbar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Container } from './components/Container/Container';
import { ItemCount } from './components/ItemCount/ItemCount';

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer/>
    </div>
  );
}

export default App;
