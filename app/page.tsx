'use client'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Top from '@/components/top';
import Profile from '@/components/profile';
import EmploymentHistory from '@/components/employment_history';
import Project from '@/components/project';
import Contact from '@/components/contact';
import Bottom from '@/components/bottom';

export default function Home() {

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 300, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
  }, []);

  return (
      <div className="flex flex-col w-screen min-h-screen bg-black m-auto justify-center">
        <Top />
        <Profile />
        <EmploymentHistory />
        <Project />
        <Contact />
        <Bottom />
      </div>
  );
}
