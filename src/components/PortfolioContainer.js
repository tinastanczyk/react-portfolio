import React, { useState } from 'react';
import Contact from './tabs/Contact';
import About from './tabs/About';
import Project from './tabs/Project';
import Resume from './tabs/Resume';
import Nav from './layout/Nav';
import Footer from './layout/Footer';


function Portfolio() {
  
  const [currentTab, setCurrentTab] = useState('About');

  const renderTab = () => {

    if(currentTab === 'About'){
      return <About />;
    }

    if(currentTab === 'Portfolio'){
      return <Project />
    }

    if(currentTab === 'Resume'){
      return <Resume />;
    }

    if(currentTab === 'Contact'){
      return <Contact />;
    }
  }

  const handleTabChange = (tab) => setCurrentTab(tab);

  return (
    <div>
      <Nav currentTab={currentTab} handleTabChange={handleTabChange} />
      {renderTab()}
      <Footer />
    </div>
  );
}

export default Portfolio;