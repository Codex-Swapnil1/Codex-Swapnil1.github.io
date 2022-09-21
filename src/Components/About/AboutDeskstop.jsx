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
          <h1 style={{textAlign:"center", fontSize:"30px" ,color:"lightblue", paddingBottom:"30px"}}>About</h1>
          <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}>
          <div style={{width:"30%"}}>
          <div style={{paddingLeft:"3%", textAlign:"center", maxWidth:"260px",margin:"auto"}}>
          <img style={{width:"100%", borderRadius:"10px" , boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}} alt="Remy Sharp" src="./profile.jpg" />
          </div>
          <div style={{textAlign:"center", color:"lightgray"}}>
          <h2>Swapnil Parchake</h2>
          <h1>Full Stack Web Developer</h1>
          </div>
          </div>

        <div style={{width:"60%"}}>
        <p className={style.artlgtext} style={{width:"90%", paddingTop:"0px", marginTop:"0px"}}>
              <i>
              I completed my B.E in Electrical Engineering (Electronics and Power) Stream from Babasaheb Naik College of Engineering, Pusad, Dist.Yavatmal.
              I have hands-on experience in designing, developing, and maintaining projects.
              I am a detailed-oriented and team player person.
              I like to explore more in this Domain and Specialize in Fronted and BackEnd frameworks
              </i>
            </p>
            <h1 style={{paddingLeft:"2%"}}>
            Other than,
            </h1>
    <ul className={style.artcustomlist}>
      <li>
      I am interested in playing Basketball and Volleyball.
      </li>
      <li>
      Explore new places for example Go for Hiking and camping.
      </li>
      <li>
      I am listener and Hardworking person when Smartwork not Work.
      </li>
      <li>
        Watching Anime.
      </li>
    </ul>
        </div>

          </Stack>
            <div style={{maxWidth:"1300px",margin:"auto"}} >
              <img style={{width:"100%"}} src="https://media-exp1.licdn.com/dms/image/C4D16AQGqgDO1FJ2R5w/profile-displaybackgroundimage-shrink_350_1400/0/1649132245740?e=1669248000&v=beta&t=CvNKhIzdNBronqyv_qBqntAmCO6KQztcWf_bASa8wpk" alt="quote"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
