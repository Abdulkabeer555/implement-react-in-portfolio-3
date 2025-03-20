import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Index from './components/index';
import About from './components/about';
import Courses from './components/courses';
import Events from './components/events';
import Contact from './components/contact';

const App = () => {
  const [Component, setComponent] = useState(<Index />); // Default component

  useEffect(() => {
    AOS.init();

    const path = window.location.pathname;

    let Component;
    if (path === "/about") {
      Component = <About />;
    } else if (path === "/courses") {
      Component = <Courses />;
    } else if (path === "/events") {
      Component = <Events />;
    } else if (path === "/contact") {
      Component = <Contact />;
    } else {
      Component = <Index />;
    }

    setComponent(Component);

  }, [window.location.pathname]); // Re-run whenever path changes

  return (
    <div>
      {Component}
    </div>
  );
};

export default App;
