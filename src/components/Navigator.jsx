import React from 'react';

function Navigator({ className, links }) {
  return (
    <nav aria-label="Main Navigation" role="navigation">
      <ul className={className}>
        {links.map((link, index) => (
          <li key={index}><a href="">{link}</a></li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigator;
