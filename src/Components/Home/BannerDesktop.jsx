import React from 'react'
import Code from './Code'

export const BannerDesktop = () => {
  return (
    <div style={{display:"flex",
    justifyContent:"space-between",
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
