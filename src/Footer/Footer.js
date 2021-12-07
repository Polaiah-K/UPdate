import React from 'react'
import './Footer.css'
 import img from '../Images/logo.png'

export const Footer = () => {
    return (
        <div class="Footer">
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
            <div class="column2"  >
                <h2>Categories</h2>
                <p>Men</p>
                <p>Women</p>
                <p>Accessories</p>
                <p>Shoes</p>
                <p>Dresses</p>
                <p>Skirts</p>
            </div>
            <div class="column3" >
                <h2>information</h2>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Terms & Conditions</p>
                <p>Returns & Exchanges</p>
                <p>Shipping & Delivery</p>
                <p>Privacy & Policy</p>
            </div>
            <div class="column4"  >
                            <h2>Quick Links</h2>
                
                <p>Store Location</p>
               <p> My Account</p>
                <p>Accessories</p>
               <p> Orders Tracking</p>
               <p> Size Guide</p>
                <p>FAQs</p>
            </div>
            <div class="column5" >
                <h2>instagram feed</h2>
                
            </div>
        </div>
        
    )
}
