import React from 'react';
import style from "./about.module.css";
import Stack from '@mui/material/Stack';

export default function AboutDesktop() {
  return (
    <div className='containerfluid'>
      <div>
        {/* header */}

        {/* content */}
        <div style={{textAlign:"left"}}>
          <div className={style.artcard}>
          <h1 style={{textAlign:"center", fontSize:"30px" ,color:"lightblue", marginBottom:"30px"}}>About</h1>
          <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}>
          <div style={{width:"30%"}}>
          <div style={{paddingLeft:"3%", textAlign:"center", maxWidth:"260px",margin:"auto"}}>
          <img style={{width:"100%", borderRadius:"10px"}} alt="Remy Sharp" src="./swapnilformal-prev.png" />
          </div>
          <div style={{textAlign:"center", color:"lightgray"}}>
          <h1>Swapnil Parchake</h1>
          <h3>Full Stack Web Developer</h3>
          </div>
          </div>

        <div style={{width:"60%"}}>
        <p className={style.artlgtext} style={{width:"90%", paddingTop:"0px", marginTop:"0px"}}>
              <i>
              Team collaboration, Resourceful, and detail-oriented Full Stack Web Developer with expertise in creating ready-to-use websites.
              Looking for a challenging role in a growth-oriented work environment organization.
              I like to explore more in this Domain and Specialize in Fronted and BackEnd frameworks
              </i>
            </p>
            <p style={{paddingLeft:"2%", fontSize:"18px"}}>
              Personal Intrest are <br/>
            • Playing Basketball and Volleyball. <br/>
            • Explore new places and traveling. <br/>
            • Watching Anime.
            </p>
        </div>
          </Stack>
            <div style={{maxWidth:"1300px",margin:"auto"}} >
              <img style={{width:"100%"}} src="./quote.jpeg" alt="quote"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
