// import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import './App.css';


import { Login } from './views/Login/Login.jsx';
// import MainLayout from './Layouts/MainLayout/MainLayout';
import {BrowserRouter, Route, Routes} from 'react-router-dom';                      
import { Home } from './views/Home/Home';          
import Cart from './components/Cart/Cart';

const MainLayout = React.lazy(()=> import('./Layouts/MainLayout/MainLayout'))
// const Login = React.lazy(()=> import('./views/Login/Login'))

const ProductSingle = React.lazy(()=> import('./components/ProductSingle/ProductSingle'))



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="login" element={ <Login/> }/>      

        <Route path='/' element={<React.Suspense fallback={<>loading...</>}>
        <MainLayout/>
        </React.Suspense>
        }>
          <Route index element={<Home/>}/>
          <Route path='users/:id' element={<React.Suspense fallback={<>loading loading loading</>}>
          <ProductSingle />
          </React.Suspense>
          
          }/>
        <Route path='/cart' element={<Cart/>}/> 
        </Route>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
