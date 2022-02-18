import React, { useState } from 'react';
import Header from './Header';
import Headshot from './Headshot';
import Contact from './Contact';


function Portfolio() {
  
  const [currentTab, setCurrentTab] = useState('Top');

  const renderTab = () => {
    if(currentTab === 'Top'){
      return <Top />;
    }

    if(currentTab === 'About'){
      return <About />;
    }

    if(currentTab === 'Resume'){
      return <Resume />;
    }

    if(currentTab === 'Contact'){
      return <Contact />;
    }
  }

  handleTabChange = (tab) => setCurrentTab(tab);
  return (
    <div>
      <Header />
      <Headshot />
      <Contact />
    </div>
  );
}

export default Portfolio;