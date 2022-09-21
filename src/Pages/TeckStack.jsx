import React from 'react';
import { Media } from 'react-breakpoints';
import SkillsDeskStop from '../Components/Technology/SkillsDeskStop'
import SkillsMobile from '../Components/Technology/SkillsMobile';

export const TechStack = () => {
  return (
    <div>
     <Media>
        {({ breakpoints, currentBreakpoint }) =>
          breakpoints[currentBreakpoint] > breakpoints.mobile ? (
            <SkillsDeskStop />
          ) : (
            <SkillsMobile />
          )
        }
      </Media>
    </div>
  )
}
