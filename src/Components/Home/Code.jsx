import React from 'react'
import Typed from 'react-typed';
// for blinking cursor
import 'react-typed/dist/animatedCursor.css';
const Code = () => {
  return (
    <div>
    <div className='art-lg-text art-code mb-25'
    >
      &lt;<i style={{color:"red"}}>code</i>&gt;{' '}
      <Typed
        loop
        typeSpeed={200}
        backSpeed={25}
        strings={["ajnaindi","mndeed "]}
        smartBackspace
        shuffle={false}
        backDelay={1}
        fadeOut={false}
        fadeOutDelay={100}
        loopCount={0}
        showCursor
        cursorChar='|'
        style={{color:"white"}}
      />{' '}
      &lt;/<i style={{color:"red"}}>code</i>&gt;
    </div>
    </div>
  )
}

export default Code