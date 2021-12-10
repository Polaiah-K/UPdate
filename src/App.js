// import logo from './logo.svg';
import './App.css';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
// import {Dropdowns} from './Header/Dropdown/Dropdowns'
import { Middle } from './Middle/Middle'
import {Middle2} from './Middle2/Middle2.js';
//import {BrowserRouter, Route,Routes} from 'react-router-dom'








function App() {
  return (
    <div className="App">
     
   
      <Header/> 
      <Middle/>
      <Middle2/>
      <Footer/>
      
    
    </div>
  );
}

export default App;
