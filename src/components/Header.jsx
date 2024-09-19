import React from 'react';
import Nav from './Navigator';

function Header() {
  return (
    <header>
      <h1>Satre's List</h1>
      <h2>Better-Dressed People</h2>
      <Nav className="topNav" links={['Women\'s', 'Men\'s', 'On the Street', 'The Catwalk', 'Adwatch', 'About']} />
    </header>
  );
}

export default Header;

  