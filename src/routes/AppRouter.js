import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { Navbar } from '../components/Navbar/Navbar'
import { ItemDetailsContainer } from '../components/ItemDetailsContainer/ItemDetailsContainer';
import Cart from '../components/Cart/Cart';
import Footer from '../components/Footer/Footer';
import { Checkout } from '../components/Checkout/Checkout';
import {Routes, Route, Navigate} from 'react-router-dom'

export const AppRouter = ()=>{

return(
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/categoria/:categoryId' element={<ItemListContainer />}/>
        <Route path='/item/:itemId' element={<ItemDetailsContainer />}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='*' element={ <Navigate to={"/"} /> } />
      </Routes>
      <Footer/>
    </>
)
}