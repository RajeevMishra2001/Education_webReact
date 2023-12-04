import React from 'react'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <nav>
      <h1>SHIKSHA.</h1>

      <main>
        <HashLink to={"/#HOME"}>HOME</HashLink>
        <Link to={"/CONTACT"}>CONTACT</Link>
        <HashLink to={"/#ABOUT"}>ABOUT</HashLink>
        <HashLink to={"/#BRANDS"}>BRAND</HashLink>
        <Link to={"/SERVICES"}>SERVICES</Link>
      </main>
    </nav>
  )
}

export default Header;