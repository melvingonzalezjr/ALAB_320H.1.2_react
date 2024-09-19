import React from 'react';
import Navigator from './Navigator';

function Footer() {
  return (
    <footer>
      <Navigator className="botNav" links={['Women\'s', 'Men\'s', 'On the Street', 'The Catwalk', 'Adwatch', 'About', 'Tips']} />
      <aside>&#169 2013 Valet Industries, Inc</aside>
    </footer>
  );
}

export default Footer;
