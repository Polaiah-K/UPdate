import React from 'react'
import './Header.css'
import img from '../Images/logo.png'
//    import { Dropdowns } from './Dropdown/Dropdowns'


export const Header = () => {
   
//     const [Drop, setDrop] = useState(false)
//   const Testfunction=()=>{
//       setDrop(true)
//   }
//   const Testfunction1=()=>{
//     setDrop(false)
// }
  
    return (

        <div >
            <div className="Header-fl">
                <ul className="Header">
                    <li ><a href="/tests" class="Header-list"><i class="fa fa-phone"></i> +01 23456789</a></li>
                    <li><a href="/studyroom" class="Header-list"><i class="fa fa-envelope-o"></i> claue@domain.com</a></li>
                    <li><a href="/flashcards" class="Header-list"><i class="fa fa-car"></i> Track Your Order</a></li>
                    <li><a href="/library" class="Header-list"><i class="fa fa-map-marker" ></i> Store Locator</a></li>

                    <form action="/">
                        <select  className="Header-list" name="cars" id="cars">
                            <option value="volvo">Rusia</option>
                            <option value="saab">Austria</option>
                            <option value="opel">Cuba</option>
                            <option value="audi">Brazil</option>
                            <option value="audi">sdfghj</option>
                            <option value="audi">Brazil</option>
                            <option value="audi">Brazil</option>
                        </select>
                    </form>
                </ul>
            </div>
            <div className="Header-fl">
                <ul className="navbar1">

                    <img src={img} alt="" id="Nav" href="/library"></img>
                    <li><a href="/tests"style={{color:"red"}} > Sale</a></li>
                    <li><a href="/studyroom"
            
                   > Smart Glass</a></li>
                    <li><a href="/flashcards">Elements</a></li>
                    <li><a href="/library">Pages</a></li>
                    <li><a href="/library">Product</a></li>
                    <li><a href="/dropdowns">Shop</a></li>
                    <li><a href="/library">Home</a></li>

                </ul>


            </div>
            <div>

                <ul className="navbar2">
                    <input className="Search" type="text" placeholder="Search entire store here.." />
                    
                    <li><a href="/studyroom"><i class="fa fa-shopping-cart"></i> </a></li>
                    <li><a href="/flashcards"><i  class="fa fa-heart"></i></a></li>
                    <li><a href="/library"><i class="fa fa-user"></i></a></li>


                </ul>
            </div>

            <div className="Header-fl">
                <div className="column" >
                    <h4  className= "new2"
                    >Spring-Summer 2016</h4>
                    <h1 className="new3">FLASH SALE OF 70%</h1>
                    <p  className ="new4">Duis aute irure dolor in reprehenderit in voluptate <br></br>
                    velit essecillum dolore eu fugiat nulla pariatur. Excepteu</p>
                    <button type="button" class="btn-Type">Shop now</button>
                </div>
               
            </div>
        </div>
    


    )
}
