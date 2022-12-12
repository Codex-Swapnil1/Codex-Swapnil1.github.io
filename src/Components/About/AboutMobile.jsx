import React from 'react';
import style from "./about.module.css";

export default function AboutMobile() {
  return (
    <div className='containerfluid'>
      <div>
        {/* header */}

        {/* content */}
        <div style={{textAlign:"left"}}>
          <div className={style.artcard}>
          <h1 style={{textAlign:"center", fontSize:"30px" ,color:"lightgray", paddingBottom:"30px"}}>About Me</h1>
          <div style={{paddingLeft:"3%", textAlign:"center", maxWidth:"260px",margin:"auto"}}>
          <img style={{width:"100%", borderRadius:"10px" }} alt="Remy Sharp" src="./swapnilformal-prev.png" />
          </div>
          <div style={{textAlign:"center", color:"lightgray"}}>
          <h1>Swapnil Parchake</h1>
          <h3>Full Stack Web Developer</h3>
          </div>

            <p style={{fontSize:"16px",lineHeight:"20px"}}>

              Team collaboration, Resourceful, and detail-oriented Full Stack Web Developer with expertise in creating ready-to-use websites.
              Looking for a challenging role in a growth-oriented work environment organization.
              I like to explore more in this Domain and Specialize in Fronted and BackEnd frameworks.

            </p>
            <div style={{maxWidth:"1200px",margin:"auto"}} >
              <img style={{width:"100%"}} src="./quote.jpeg" alt="quote"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
