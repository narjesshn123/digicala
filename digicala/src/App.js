import React from 'react';
import './App.css';
// import MainLayout from './Layouts/MainLayout/MainLayout';
import {BrowserRouter, Route, Routes} from 'react-router-dom';                      
import { Home } from './views/Home/Home';          
import Cart from './components/Cart/Cart';
const MainLayout = React.lazy(()=> import('./Layouts/MainLayout/MainLayout'))
const ProductSingle = React.lazy(()=> import('./components/ProductSingle/ProductSingle'))


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
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
