import React from 'react';
import style from "../Components/About/about.module.css";

export default function About() {
  return (
    <div className='containerfluid'>
      <div className='row p-30-0'>
        {/* header */}

        {/* content */}
        <div style={{textAlign:"left"}}>
          <div className={style.artcard}>
          <h1 style={{textAlign:"center", fontSize:"33px" ,color:"lightgray", paddingBottom:"30px"}}>About</h1>
          <div style={{paddingLeft:"3%", textAlign:"center", maxWidth:"400px",margin:"auto"}}>
          <img style={{width:"100%", borderRadius:"10px" , boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}} alt="Remy Sharp" src="./profile.jpg" />
          </div>
          <div style={{textAlign:"center", color:"lightgray"}}>
          <h2>Swapnil Parchake</h2>
          <h1>Full Stack Web Developer</h1>
          </div>

            <p className={style.artlgtext}>
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
            <blockquote>
              <img style={{width:"100%"}} src="https://media-exp1.licdn.com/dms/image/C4D16AQGqgDO1FJ2R5w/profile-displaybackgroundimage-shrink_350_1400/0/1649132245740?e=1669248000&v=beta&t=CvNKhIzdNBronqyv_qBqntAmCO6KQztcWf_bASa8wpk" alt="quote"/>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
