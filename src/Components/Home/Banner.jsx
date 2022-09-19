import React from 'react'
import "./banner.css"
import { Media } from 'react-breakpoints';
import { BannerDesktop } from './BannerDesktop';
import { BannerMobile } from './BannerMobile';

const Banner = () => {
  return (
    <Media>
    {({ breakpoints, currentBreakpoint }) =>
      breakpoints[currentBreakpoint] > breakpoints.tablet ? (
        <BannerDesktop/>
      ) : (
        <BannerMobile/>
      )
    }
  </Media>
  )
}

export default Banner