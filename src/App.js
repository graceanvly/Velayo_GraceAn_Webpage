
import { Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';

export function App() {
   return (
    <>
      <NavBar/>
         <Routes>
         <Route path ="/home" element = {<HomePage/>}/>
         <Route path ="/LogIn" element = {<Login/>}/>
         <Route path ="/Register" element= {<Register/>}/>
      </Routes>   
    
    </>
   
   )
}

export default App;
