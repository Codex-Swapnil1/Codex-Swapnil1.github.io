import React from 'react'
import Code from './Code'
import "./banner.css"

const Banner = () => {
  return (
  <div style={{display:"flex",
  justifyContent:"space-between",
  border:"1px solid red",
  marginTop:"50px",
  padding:"1% 3%"
  }}>
  <div>
  <Code/>
  </div>
    <div style={{ maxWidth:"500px"}}>
 <img  src="./pngwing.com.png" alt="programmer" width="100%" />
    </div>
    </div>
  )
}

export default Banner