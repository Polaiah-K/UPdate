import React, { useState } from 'react'
import './MIddle2.css'
import img1 from '../Images/Middle21.jpg'
import img2 from '../Images/Middle22.jpg'
import img3 from '../Images/Middle23.jpg'

export const Middle2 = () => {
 const [Email, setEmail] = useState('')
    return (
        <div >
            <div class="Text">
                <h1>---------LATEST FROM BLOG----------</h1>
                <p>The freshest and most exciting news</p>
            </div>

            <div class="Midd-card">
                <div class="card">
                    <img src={img1} class="card-1" alt="" href="/library" ></img>
                    <div class="container">
                        <h4><b>Prada Collection For Men 2017</b></h4>
                        <p>By admin on sep 23,2021</p>
                    </div>
                </div>
                <div class="card" >
                    <img src={img2} class="card-2" alt="" href="/library"></img>
                    <div class="container">
                        <h4><b>Suspendeisse Consequat Orci</b></h4>
                        <p>By admin on jul 30,2021</p>
                    </div>
                </div>
                <div class="card" >
                    <img src={img3} alt="" class="card-3" href="/library" ></img>
                    <div class="container">
                        <h4><b>Burberry Collection For Women 2017</b></h4>
                        <p>By admin on jul 30,2021</p>
                    </div>
                </div>



            </div>
            
            <div className="Footer-head">
                <h2 className="Newsletter">NEWSLETTER SIGN UP</h2>
                <p className="Footer-subscribe">Subscribe our newsletter to get latest new about our new product and promo campaign.</p>
                <form>
                <input class="Footersearch" 
                 type="text"
                 placeholder="Your email Address.."
                 value={Email}
                 onChange={(e)=>setEmail(e.target.value)}
                 
                  />
                  
              
                </form>
            </div>
            
        </div>
    )
}
