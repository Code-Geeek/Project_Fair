import './App.css';
import { Routes,Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Project from './Pages/Project';
import Footer from './Components/Footer'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Projects' element={<Project/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
