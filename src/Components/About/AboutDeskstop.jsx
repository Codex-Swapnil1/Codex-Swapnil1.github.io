import React from 'react';
import style from "./about.module.css";
import Stack from '@mui/material/Stack';

export default function AboutDesktop() {
  return (
    <div className='containerfluid'>
      <div style={{height:"80vh"}}>
        {/* header */}

        {/* content */}
        <div style={{textAlign:"left"}}>
          <div className={style.artcard}>
          <h1 style={{textAlign:"center", fontSize:"30px" ,color:"lightblue", marginBottom:"30px"}}>About Me</h1>
          <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}>
          <div style={{width:"40%"}}>
          <div style={{paddingLeft:"3%", textAlign:"center", maxWidth:"400px",margin:"auto"}}>
          <img style={{width:"100%", borderRadius:"10px"}} alt="Remy Sharp" src="./pngwing.png" />
          </div>
          </div>

        <div style={{width:"60%"}}>

        <p style={{width:"90%",lineHeight:"1.6", fontSize:"18px" ,paddingTop:"0px", marginTop:"0px"}}>
              Team collaboration, Resourceful, and detail-oriented Full Stack Web Developer with expertise in creating ready-to-use websites.
              Looking for a challenging role in a growth-oriented work environment organization.
              I like to explore more in this Domain and Specialize in Fronted and Backend frameworks.

            </p>
            Quote:
            <div
            style={{boxShadow: "rgba(212,212,212, 0.5) 0px 0px 3px 3px",
            width:"50%",
             fontFamily:"monospace",
             padding:"20px 60px",
             lineHeight:"1.4",
             marginTop: "10px",
             }}>
              Its Not About Ideas <br/> It's About Making Ideas happens
            </div>

        </div>
          </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
