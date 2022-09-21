import React from 'react';
import AboutDesktop from '../Components/About/AboutDeskstop';
import AboutMobile from '../Components/About/AboutMobile';
import { Media } from 'react-breakpoints';

export default function About() {
  return (
    <Media>
        {({ breakpoints, currentBreakpoint }) =>
          breakpoints[currentBreakpoint] > breakpoints.tablet ? (
            <AboutDesktop/>
          ) : (
            <AboutMobile />
          )
        }
      </Media>
  )

}
