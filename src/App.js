import './App.css';
import { Routes,Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Project from './Pages/Project';
import Footer from './Components/Footer'
import Auth from './Components/Auth';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth />}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/Dashboard' element={<Dashboard />}/>
        <Route path='/project' element={<Project/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
