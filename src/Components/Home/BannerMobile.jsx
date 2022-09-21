import React from 'react'
import Code from './Code'

export const BannerMobile = () => {
  return (
    <div style={{
    marginTop:"50px",
    padding:"1% 3%"
    }}>
    <div >
        <Code/>
    </div>
      <div style={{ maxWidth:"350px", paddingTop:"40px",margin:"auto"}}>
   <img  src="./pngwing.com.png" alt="programmer" width="100%" />
      </div>
      </div>
    )
}
