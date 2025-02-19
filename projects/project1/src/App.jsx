import Gallery from "./component/FunctionComponent/gallery.jsx";
import About from "./component/FunctionComponent/about.jsx";
import Contact from "./component/FunctionComponent/contact.jsx";
import Signup from "./component/FunctionComponent/signup.jsx";
import Home from "./component/FunctionComponent/home.jsx";
import Navbar from "./component/FunctionComponent/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar /> {/* Used to Navigate between pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
