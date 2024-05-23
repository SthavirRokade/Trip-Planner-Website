import logo from './logo.svg';
import './App.css';
// import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Service';
import Contact from './routes/Contact';
import Navbar from './components/Navbar';
import SignUp from './routes/SignUp';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/signup'  element={<SignUp/>}/>
      </Routes>
  
      {/* <Navbar/> */}
      

     
     
    </div>
  );
}

export default App;
