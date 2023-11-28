import './App.css';
import { Routes,Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Project from './Pages/Project';
import Footer from './Components/Footer'
import Auth from './Components/Auth';
import { useContext } from 'react';
import { tokenAuthorizationContext } from './Contexts/TokenAuth';


function App() {
  const {isAuthorized,setIsAuthorized}= useContext(tokenAuthorizationContext)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Auth />}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/Dashboard' element={ isAuthorized?<Dashboard />:<Home/>}/>
        <Route path='/project' element={ isAuthorized? <Project/>:<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
