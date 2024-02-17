
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Women from './Pages/Women';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Dresses from './Pages/Dresses';
import Product from './Pages/Product';



function App() {
  return (
    <BrowserRouter>    
      <Navbar/> 
          
      <Routes>
        <Route path="/" element={<Women/>}/>
        <Route path="/dresses" element={<Dresses/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>  
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>

      </Routes>      
    </BrowserRouter>
  );
}

export default App;























 



   











