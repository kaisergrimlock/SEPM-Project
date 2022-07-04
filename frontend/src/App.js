import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className='w-full h-[500vh] overflow-hidden bg-emerald-300 duration-300' id='body'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/about' element={<About />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
