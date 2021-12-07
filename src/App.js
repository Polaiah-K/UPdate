// import logo from './logo.svg';
import './App.css';
import { Footer } from './Footer/Footer';
// import Footheader from './Footheader/Footheader';
import { Header } from './Header/Header';
import { Middle } from './Middle/Middle'
import {Middle2} from './Middle2/Middle2.js';
// import { Dropdowns } from './Components/Dropdown/Dropdowns';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
  
       <Header/> 
      <Middle/>
      <Middle2/>
      
      <Footer/>
    </div>
  );
}

export default App;
