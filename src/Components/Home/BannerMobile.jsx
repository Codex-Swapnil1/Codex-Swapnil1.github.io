import React from 'react'
import Code from './Code'

export const BannerMobile = () => {
  return (
    <div >
    <div style={{maxWidth:"350px",margin:"auto"}}>
        <Code/>
    </div>
      <div style={{ maxWidth:"350px", paddingTop:"10px",margin:"auto"}}>
   <img style={{ maxWidth:"300px",borderRadius:"10px",boxShadow: "rgba(212,212,212, 0.3) 0px 0px 3px 3px",marginTop:"30px"}} src="./swapnilformal.jpg" alt="programmer" width="100%" />
      </div>
      </div>
    )
}
