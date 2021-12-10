import React, { useState } from 'react'
import './MIddle2.css'
import img1 from '../Images/Middle21.jpg'
import img2 from '../Images/Middle22.jpg'
import img3 from '../Images/Middle23.jpg'

export const Middle2 = () => {
    const [Email, setEmail] = useState('')
    return (
        <div >
            <div className="Text">
                <h1>---------LATEST FROM BLOG----------</h1>
                <p>The freshest and most exciting news</p>
            </div>

            {/* <div className="Midd-card">
                <div className="card">
                    <img src={img1} className="card-1" alt="" href="/library" ></img>
                    <div className="container">
                        <h4><b>Prada Collection For Men 2017</b></h4>
                        <p>By admin on sep 23,2021</p>
                    </div>
                </div>
                <div className="card" >
                    <img src={img2} className="card-2" alt="" href="/library"></img>
                    <div className="container">
                        <h4><b>Suspendeisse Consequat Orci</b></h4>
                        <p>By admin on jul 30,2021</p>
                    </div>
                </div> 
                <div className="card" >
                    <img src={img3} alt=""  href="/library" ></img>
                    <div class="container">
                        <h4><b>Burberry Collection For Women 2017</b></h4>
                        <p>By admin on jul 30,2021</p>
                    </div>
                </div>

            </div> */}
            <div>
            <div className="image">
                <div className="Zoom-in">
                    <div className="figure">
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <h4><b>Prada Collection For Men 2017</b></h4>
                        <p>By admin on sep 23,2021</p>
                    </div>

                </div>

            </div>
            <div className="image">
                <div className="Zoom-in">
                    <div className="figure">
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <h4><b>Suspendeisse Consequat Orci</b></h4>
                        <p>By admin on jul 30,2021</p>
                    </div>

                </div>

            </div>

            <div className="image">
                <div className="Zoom-in">
                    <div className="figure">
                        <img src={img3} alt="" />
                    </div>
                    <div>
                        <h4><b>Burberry Collection For Women 2017</b></h4>
                        <p>By admin on jul 30,2021</p>
                    </div>

                </div>

            </div>
            </div>
            <div className="Footer-head">
                <h2 className="Newsletter">NEWSLETTER SIGN UP</h2>
                <p className="Footer-subscribe">Subscribe our newsletter to get latest new about our new product and promo campaign.</p>
                <form>
                    <input className="Footersearch"
                        type="text"
                        placeholder="Your email Address.."
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}

                    />


                </form>
            </div>

        </div>
    )
}
