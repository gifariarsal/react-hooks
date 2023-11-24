import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/use-state" className="link">
          useState
        </Link>
        <Link to="/use-effect" className="link">
          useEffect
        </Link>
        <Link to="/use-ref" className="link">
          useRef
        </Link>
        <Link to="/use-reducer" className="link">
          useReducer
        </Link>
      </nav>
    </header>
  );
}

export default Header