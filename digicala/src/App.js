import './App.css';
import MainLayout from './Layouts/MainLayout/MainLayout';
import {BrowserRouter, Route, Routes} from 'react-router-dom';                      
import { Home } from './views/Home/Home';
import { Supermarket } from './components/Supermarket/Supermarket';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
        <Route path='/supermarket' element={<Supermarket/>}>

        </Route>
       
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
