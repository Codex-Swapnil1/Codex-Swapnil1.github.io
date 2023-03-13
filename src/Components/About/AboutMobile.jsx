import React from 'react';
import style from "./about.module.css";

export default function AboutMobile() {
  return (
    <div id="about" class="about section">
    <div className='containerfluid'>
      <div>
        {/* header */}

        {/* content */}
        <div style={{textAlign:"left"}}>
          <div className={style.artcard}>
          <h1 style={{textAlign:"center", fontSize:"30px" ,color:"lightgray", paddingBottom:"30px"}}>About Me</h1>
          <div style={{paddingLeft:"3%", textAlign:"center", maxWidth:"260px",margin:"auto"}}>
          <img style={{width:"100%", borderRadius:"10px" }} alt="Remy Sharp" src="pngwing.png" />
          </div>

            <p style={{fontSize:"16px",lineHeight:"1.4"}}>

              Team collaboration, Resourceful, and detail-oriented Full Stack Web Developer with expertise in creating ready-to-use websites.
              Looking for a challenging role in a growth-oriented work environment organization.
              I like to explore more in this Domain and Specialize in Fronted and BackEnd frameworks.
            </p>
            <div>
            Quote:
            <div
            style={{boxShadow: "rgba(212,212,212, 0.5) 0px 0px 3px 3px",
            width:"90%",
             fontFamily:"monospace",
             padding:"10px 20px",
             lineHeight:"1.4",
             marginTop: "10px",
             fontSize:"16px"
             }}>
              Its Not About Ideas <br/> It's About Making Ideas happens
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
