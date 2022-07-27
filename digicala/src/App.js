import './App.css';
import MainLayout from './Layouts/MainLayout/MainLayout';
import {BrowserRouter, Route, Routes} from 'react-router-dom';                      
import { Home } from './views/Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
