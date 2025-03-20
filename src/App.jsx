import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Index from './components/index';
import About from './components/about';
import Courses from './components/courses';
import Events from './components/events';
import Contact from './components/contact';

const App = () => {
  const path = window.location.pathname;  
  
  let Component;
  if (path === "/about") {
    Component = About;
  } else if
   (path === "/courses") {
     Component = Courses;
  } else if
   (path === "/events") {
    Component = Events;
  } 
   else if
   (path === "/contact") {
    Component = Contact;
  } else {
    Component = Index;
  }

  

  return (
    
    <div>
      <Component />
    </div>
  );
};

export default App;
