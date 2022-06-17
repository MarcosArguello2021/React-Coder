import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar'
import { Nosotros } from './components/Nosotros/Nosotros'
import { Contacto } from './components/Contacto/Contacto'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailsContainer } from './components/ItemDetailsContainer/ItemDetailsContainer'
import LoginScreen from './components/LoginScreen/LoginScreen';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';


function App() {




  return (
    <CartProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/categoria/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetailsContainer />}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/nosotros' element={<Nosotros />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='*' element={ <Navigate to={"/"} /> } />
        <Route path='/login' element={<LoginScreen />}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
