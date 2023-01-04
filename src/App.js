import { Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import {Home, Signin, Signup,Products , Product, About,Contact} from './components/pages'
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/products/:id' element={<Product/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
    </Routes>
    </>
    
  );
}

export default App;
