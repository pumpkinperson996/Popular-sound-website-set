import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul style={{ listStyleType: 'none', padding: 20}}>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/">Home</Link>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/youtube-oil">Youtube Oil</Link>
        </li>
        {/* Add more navigation links as needed */}
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <Link to="/black-hand-brother">Black Hand Brother</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
