
//import { Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';

export function App() {
   return (
    <>
      <NavBar/>
       <HomePage/> 
        {/* <Routes>
         <Route path ="#home" element = {<HomePage/>}/>
      </Routes>   */}
    
    </>
   
   )
}

export default App;
