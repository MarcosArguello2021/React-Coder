import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import * as bootstrap from 'bootstrap'
import { Navbar } from './components/Navbar/Navbar'
import { Nosotros } from './components/Nosotros/Nosotros'
import { Contacto } from './components/Contacto/Contacto'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailsContainer } from './components/ItemDetailsContainer/ItemDetailsContainer'


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/categoria/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetailsContainer />}/>
        <Route path='/nosotros' element={<Nosotros />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='*' element={ <Navigate to={"/"} /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
