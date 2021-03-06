import './App.css';
import { Navbar } from './Components/Navbar';
import {Routes,Route} from 'react-router-dom';
import {Products} from './Components/Product';
import {ProductDetails} from './Components/ProductDetails';
import { Home } from './Components/Home';
import { Cart } from './Components/Cart';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:id" element={<ProductDetails />}></Route>
         <Route path="/cart/:id" element={<Cart/>}></Route>
      </Routes>
    </>
  )
}

export default App;