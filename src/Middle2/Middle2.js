import React from 'react'
import './MIddle2.css'
import img1 from '../Images/Middle21.jpg'
import img2 from '../Images/Middle22.jpg'
import img3 from '../Images/Middle23.jpg'

export const Middle2 = () => {
    return (
        <div >
            <div class="Text">
                <h1>---------LATEST FROM BLOG----------</h1>
                <p>The freshest and most exciting news</p>
            </div>
            
                <div class="card">
                   <img src={img1} class="card-1"alt="" href="/library" ></img>
                    <div class ="container">
                    <h4><b>Prada Collection For Men 2017</b></h4>
                    <p>By admin on sep 23,2021</p>
                    </div>
                </div>
            <div class="card" >
            <img src={img2}  class="card-2"alt="" href="/library"></img>
                    <div class ="container">
                    <h4><b>Suspendeisse Consequat Orci</b></h4>
                    <p>By admin on jul 30,2021</p>
            </div>
            </div>
            <div class="card" >
               <img src={img3} alt="" class="card-3" href="/library" ></img>
                    <div class ="container">
                    <h4><b>Burberry Collection For Women 2017</b></h4>
                    <p>By admin on jul 30,2021</p>
            </div>
            </div>


        </div>
    )
}
