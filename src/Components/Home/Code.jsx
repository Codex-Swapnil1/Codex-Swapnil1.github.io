import React from 'react'
import Typed from 'react-typed';
// for blinking cursor
import 'react-typed/dist/animatedCursor.css';
import SocialMedia from './SocialMedia';
const Code = () => {

const Lines = [
  "Hello World!",
  "I am a Full Stack Web Developer.",
  "I Am a Learner"
]

  return (
    <div style={{textAlign:"left",paddingLeft:"40px", maxWidth:"600px"}}>
    <div style={{width:"100%",color:"orange",fontSize:"25px"}}>
    <h1 style={{marginTop:"20px",marginBottom:"0px",
    }}>Hi</h1>
    <h1 style={{marginTop:"20px"}}>Welcome</h1>
    </div>

    <div className='art-lg-text art-code mb-25'

    >
      &lt;<i style={{color:"red"}}>code</i>&gt;{' '}
      <Typed
        loop
        typeSpeed={180}
        backSpeed={25}
        strings={Lines}
        smartBackspace
        shuffle={false}
        backDelay={1}
        fadeOut={false}
        fadeOutDelay={100}
        loopCount={0}
        showCursor
        cursorChar='|'
        style={{color:"lightblue"}}
      />{' '}
      &lt;/<i style={{color:"red"}}>code</i>&gt;
    </div>
    <SocialMedia/>
    </div>
  )
}

export default Code