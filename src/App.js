import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar';
import Login from './page/Login';
import Product from './page/Product';
import ProductDetil from './page/ProductDetail';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const [authenticate, setAuthenticate] = useState(false)

  useEffect(() => {
    console.log('authenticate', authenticate)
  }, [authenticate])

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;
