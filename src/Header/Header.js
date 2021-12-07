import React from 'react'
import './Header.css'
import img from '../Images/logo.png'
// import img1 from '../Images/banner_smart_tab.jpg'
// import { Dropdowns } from './Dropdown/Dropdowns'

export const Header = () => {
    return (

        <div>
            <div>
                <ul id="navbar">
                    <li ><a href="/tests" class="Header-list"><i class="fa fa-phone"></i> +01 23456789</a></li>
                    <li><a href="/studyroom" class="Header-list"><i class="fa fa-envelope-o"></i> claue@domain.com</a></li>
                    <li><a href="/flashcards" class="Header-list"><i class="fa fa-car"></i> Track Your Order</a></li>
                    <li><a href="/library" class="Header-list"><i class="fa fa-map-marker" ></i> Store Locator</a></li>

                    <form action="/">
                        <select  class="Header-list" name="cars" id="cars">
                            <option value="volvo">Rusia</option>
                            <option value="saab">Austria</option>
                            <option value="opel">Cuba</option>
                            <option value="audi">Brazil</option>
                            <option value="audi"></option>
                            <option value="audi">Brazil</option>
                            <option value="audi">Brazil</option>
                        </select>
                    </form>
                </ul>
            </div>
            <div>
                <ul id="navbar1">

                    <img src={img} alt="" id="Nav" href="/library"></img>
                    <li><a href="/tests"style={{color:"red"}} > Sale</a></li>
                    <li><a href="/studyroom"> Smart Glass</a></li>
                    <li><a href="/flashcards">Elements</a></li>
                    <li><a href="/library">Pages</a></li>
                    <li><a href="/library">Product</a></li>
                    <li><a href="/library">Shop</a></li>
                    <li><a href="/library">Home</a></li>

                </ul>


            </div>
            <div>

                <ul id="navbar2">
                    <input class="Search" type="text" placeholder="Search entire store here.." />
                    {/* <li><a href="/tests"> <i class="fal fa-id-card-alt"></i> </a></li> */}
                    <li><a href="/studyroom"><i class="fa fa-shopping-cart"></i> </a></li>
                    <li><a href="/flashcards"><i  class="fa fa-heart"></i></a></li>
                    <li><a href="/library"><i class="fa fa-user"></i></a></li>


                </ul>
            </div>

            <div class="row">
                <div class="column" >
                    <h4  class= "new2"
                    >Spring-Summer 2016</h4>
                    <h1 class="new3">FLASH SALE OF 70%</h1>
                    <p  class ="new4">Duis aute irure dolor in reprehenderit in voluptate <br></br>
                    velit essecillum dolore eu fugiat nulla pariatur. Excepteu</p>
                    <button type="button" class="btn-Type">Shop now</button>
                </div>
                {/* <div class="column" >
                    <img src={img1} alt="" id="col-3-img" href="/library"></img>
                    
                    
                </div> */}
            </div>
        </div>
    


    )
}
