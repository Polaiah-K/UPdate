import React from 'react'
import './Footer.css'
import img from '../Images/logo.png'

export const Footer = () => {
    return (
        <div >

            <div className="Footer">
                <div class="column1" >
                    <div>
                        <img src={img} alt=""></img>
                    </div>

                    <ul>
                        <li class="farmat"><i class="fa fa-map-marker" ></i> 184 Main Rd E, St Albans
                            VIC 3021, Australia</li> <br></br>
                        <li class="farmat"><i class="fa fa-envelope-o"></i> claue@domain.com</li><br></br>
                        <li class="farmat"><i class="fa fa-phone"></i> +01 2345678</li>
                    </ul>

                </div>
                <div >
                    <ul class="column2">
                        <h2>Categories</h2>
                        <li class="foot-style">Men</li>
                        <li class="foot-style">Women</li>
                        <li class="foot-style">Accessories</li>
                        <li class="foot-style">Shoes</li>
                        <li class="foot-style">Dresses</li>
                        <li class="foot-style">Skirts</li>
                    </ul>
                </div>
                <div class="column3" >
                    <h2>information</h2>
                    <p class="foot-style">About Us</p>
                    <p class="foot-style">Contact Us</p>
                    <p class="foot-style">Terms & Conditions</p>
                    <p class="foot-style">Returns & Exchanges</p>
                    <p class="foot-style">Shipping & Delivery</p>
                    <p class="foot-style">Privacy & Policy</p>
                </div>
                <div class="column4"  >
                    <h2>Quick Links</h2>

                    <p class="foot-style">Store Location</p>
                    <p class="foot-style"> My Account</p>
                    <p class="foot-style">Accessories</p>
                    <p class="foot-style"> Orders Tracking</p>
                    <p class="foot-style"> Size Guide</p>
                    <p class="foot-style"   >FAQs</p>
                </div>
                <div class="column5" >
                    <h2>instagram feed</h2>

                </div>
                <div class="newsletter">

                </div>
            </div>
            <div class="copyright">
                <ul class="Footer-list">
                    <li><p class="copyright-p">Copyright © 2017 Claue. All rights reserved. Powered by Magesolution</p></li>
                    {/* <li ><a href="/tests" >+01 23456789</a></li>
                    <li><a href="/studyroom" > claue@domain.com</a></li>
                    <li><a href="/flashcards" > Track Your Order</a></li>
                    <li><a href="/library" > Store Locator</a></li> */}
               </ul>     
               
                
                
            </div>  

        </div>


    )
}
