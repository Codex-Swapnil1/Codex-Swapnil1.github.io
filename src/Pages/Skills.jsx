import React from 'react';
import { Media } from 'react-breakpoints';
import DesktopSkill from '../Components/Skills/DesktopSkill';
import MobileSkill from '../Components/Skills/MobileSkill';

export const Skills = () => {
  return (
    <div>
     <Media>
        {({ breakpoints, currentBreakpoint }) =>
          breakpoints[currentBreakpoint] > breakpoints.mobile ? (
            <DesktopSkill />
          ) : (
            <MobileSkill />
          )
        }
      </Media>
    </div>
  )
}
