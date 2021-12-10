import React from 'react'
import './Footer.css'
import img from '../Images/logo.png'

export const Footer = () => {
    return (
        <div >

            <div className="Footer">
                <div className="column1" >
                    <div>
                        <img src={img} alt=""></img>
                    </div>

                    <ul>
                        <li className="farmat1"><i class="fa fa-map-marker" ></i> 184 Main Rd E, St Albans <br/>
                            VIC 3021, Australia</li> <br></br>
                        <li className="farmat"><i class="fa fa-envelope-o"></i> claue@domain.com</li><br></br>
                        <li className="farmat"><i class="fa fa-phone"></i> +01 2345678</li>
                    </ul>

                </div>
                <div >
                    <ul className="column2">
                        <h2>Categories</h2>
                        <li class="foot-style1">Men</li>
                        <li class="foot-style1">Women</li>
                        <li class="foot-style1">Accessories</li>
                        <li class="foot-style1">Shoes</li>
                        <li class="foot-style1">Dresses</li>
                        <li class="foot-style1">Skirts</li>
                    </ul>
                </div>
                <div className="column3" >
                    <h2>information</h2>
                    <p class="foot-style">About Us</p>
                    <p class="foot-style">Contact Us</p>
                    <p class="foot-style">Terms & Conditions</p>
                    <p class="foot-style">Returns & Exchanges</p>
                    <p class="foot-style">Shipping & Delivery</p>
                    <p class="foot-style">Privacy & Policy</p>
                </div>
                <div className="column4"  >
                    <h2>Quick Links</h2>

                    <p class="foot-style">Store Location</p>
                    <p class="foot-style"> My Account</p>
                    <p class="foot-style">Accessories</p>
                    <p class="foot-style"> Orders Tracking</p>
                    <p class="foot-style"> Size Guide</p>
                    <p class="foot-style"   >FAQs</p>
                </div>
                <div className="column5" >
                    <h2>instagram feed</h2>

                </div>
                <div className="newsletter">

                </div>
            </div>
            <div className="copyright">
                <ul className="Footer-list">
                    <li><p class="copyright-p">Copyright © 2017 Claue. All rights reserved. Powered by Magesolution</p></li>
                  
                </ul>



            </div>

        </div>


    )
}
