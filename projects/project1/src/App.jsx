import Gallery from "./component/FunctionComponent/gallery.jsx";
import About from "./component/FunctionComponent/about.jsx";
import Contact from "./component/FunctionComponent/contact.jsx";
import Signup from "./component/FunctionComponent/signup.jsx";
import Home from "./component/FunctionComponent/home.jsx";
import Navbar from "./component/FunctionComponent/Navbar";
import UseEffect from "./component/FunctionComponent/Hooks/UseEffects.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/FunctionComponent/login.jsx";
function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar /> {/* Used to Navigate between pages */}
        <Routes>
          <Route path="/" element={<Home greet="Hello" userName="Lankesh" />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/use-effect" element={<UseEffect />} />
          <Route path="/use-state" element=<h1>Replace this with useState Component</h1> />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
