import "../../css/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [showList1, setShowList1] = useState(false);
  const [showList2, setShowList2] = useState(false);
  return (
    <header>
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <div
          onMouseEnter={() => setShowList1(true)}
          onMouseLeave={() => setShowList1(false)}
          style={{ display: "inline-block", position: "relative" }}
        >
          <li
            className=".page-link"
            style={{ cursor: "pointer", color: "black" }}
          >
            Hooks
          </li>
          {showList1 && (
            <ol
              style={{
                position: "absolute",
                background: "lightblue",
                padding: "10px",
                borderRadius: "5px",
                listStyle: "none",
              }}
            >
              <li onClick={() => setShowList1(false)}>
                <Link to="/use-state">useState</Link>
              </li>
              <li onClick={() => setShowList1(false)}>
                <Link to="/use-effect">useEffect</Link>
              </li>
              <li onClick={() => setShowList1(false)}>
                <Link to="/use-memo">useMemo</Link>
              </li>
              <li onClick={() => setShowList1(false)}>
                <Link to="/use-ref">UseRef</Link>
              </li>
              <li onClick={() => setShowList1(false)}>
                <Link to="/use-effect-api">useEffectwithAPI</Link>
              </li>
              <li onClick={() => setShowList1(false)}>
                <Link to="/use-callback">useCallBack</Link>
              </li>
              <li onClick={() => setShowList1(false)}>
                <Link to="/use-memoize">useMemoize</Link>
              </li>
            </ol>
          )}
        </div>
        <div
          onMouseEnter={() => setShowList2(true)}
          onMouseLeave={() => setShowList2(false)}
          style={{ display: "inline-block", position: "relative" }}
        >
          <li
            className=".page-link"
            style={{ cursor: "pointer", color: "black" }}
          >
            Memo
          </li>
          {showList2 && (
            <ol
              style={{
                position: "absolute",
                background: "lightblue",
                padding: "10px",
                borderRadius: "5px",
                listStyle: "none",
              }}
            >
              <li onClick={() => setShowList2(false)}>
                <Link to="/memo">Memo</Link>
              </li>
              <li onClick={() => setShowList2(false)}>
                <Link to="/lazy">LazyLoading & Suspense</Link>
              </li>
            </ol>
          )}
        </div>
        <li>
          <Link to="/res">
            ContextAPI
          </Link>
        </li>
        <li>
          <Link to="/hoc">HoC</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </nav>
    </header>
  );
};
export default Navbar;
