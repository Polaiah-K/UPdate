import React from 'react'
import './image.css'
// import img1 from '../Images/Middle21.jpg'
import img2 from '../Images/Middle22.jpg'
// import img3 from '../Images/Middle23.jpg'


export const Image = () => {
    return (

        <div className="Pola">
            {/* <div className="Image">
                
                    <img src={img1} className="card-1" alt="" href="/library" ></img>

                
            </div>
            <div className="Image">
                
                    <img src={img2} className="card-2" alt="" href="/library"></img>

            
            </div>
           <div className="Image">
                
                    <img src={img3} alt="" className="card-3" href="/library" ></img>

                
            </div> */}
            <div className="row">
               <div className="column" >
                   
                     <img src={img2} className="card-2" alt="" href="/library"></img>  

                </div>
                <div className="column" >
                    <h2>Column 2</h2>
                    <p>Some text..</p>
                </div>
                <div className="column" >
                    <h2>Column 3</h2>
                    <p>Some text..</p>
                </div>
            </div>


        </div >




    )
}
