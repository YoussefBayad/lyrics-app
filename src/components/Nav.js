import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>Lyrics Of Ur Best Music</h1>
      </Link>
    </div>
  );
};

export default Nav;
