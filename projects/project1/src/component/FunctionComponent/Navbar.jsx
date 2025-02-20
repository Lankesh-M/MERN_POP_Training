import '../../css/Navbar.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Navbar = () => {
    const [showList, setShowList] = useState(false);
    return (
      <header>
        <nav>
          <li >
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
    <div 
      onMouseEnter={() => setShowList(true)} 
      onMouseLeave={() => setShowList(false)}
      style={{ display: "inline-block", position: "relative" }}
    >
      <li className='.page-link' style={{ cursor: "pointer", color: "black" }}>Hooks</li>
      {showList && (
        <ol style={{ position: "absolute", background: "lightblue", padding: "10px", borderRadius: "5px", listStyle:"none" }}>
          <li onClick={() => setShowList(false)}>
            <Link to="/use-state">useState</Link>
          </li>
          <li onClick={() => setShowList(false)}>
            <Link to="/use-effect">useEffect</Link>
          </li>
          <li onClick={() => setShowList(false)}>
            <Link to="/use-memo">useMemo</Link>
          </li>
          <li onClick={() => setShowList(false)}>
            <Link to="/use-ref">UseRef</Link>
          </li>
          <li onClick={() => setShowList(false)}>
            <Link to="/use-effect-api">useEffectwithAPI</Link>
          </li>
        </ol>
      )}
    </div>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </nav>
      </header>
    );
  };
  export default Navbar;