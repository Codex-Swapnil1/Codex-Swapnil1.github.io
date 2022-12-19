import React from 'react'
import Code from './Code'

export const BannerDesktop = () => {
  return (
    <div style={{display:"flex",
    justifyContent:"center",
    padding:"1% 3%",
    height:"50vh"
    }}>
        <div style={{width:"50%",margin:"auto"}}>
        <Code/>
        </div>
      <div style={{ width:"40%"}}>
   <img style={{ maxWidth:"250px",borderRadius:"10px",boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px"}}  src="./swapnilformal-prev1-removebg-preview.jpg" alt="profile" width="100%" />
      </div>
      </div>
    )
}
