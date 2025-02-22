import Gallery from "./component/FunctionComponent/gallery.jsx";
import About from "./component/FunctionComponent/about.jsx";
import Contact from "./component/FunctionComponent/contact.jsx";
import Signup from "./component/FunctionComponent/signup.jsx";
import Home from "./component/FunctionComponent/home.jsx";
import Navbar from "./component/FunctionComponent/Navbar";
import UseEffect from "./component/FunctionComponent/Hooks/UseEffects.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/FunctionComponent/login.jsx";
import UseEffectApi from "./component/FunctionComponent/Hooks/UseEffectApi.jsx";
import UseRef from "./component/FunctionComponent/Hooks/UseRef.jsx";
import UseMemo from "./component/FunctionComponent/Hooks/UseMemo.jsx";
import UseCallback from "./component/FunctionComponent/Hooks/CustomHooks/UseCallback.jsx";
import UseMemorize from "./component/FunctionComponent/Hooks/CustomHooks/UseMemorize.jsx";
import UseMemoize from "./component/FunctionComponent/Hooks/CustomHooks/UseMemorize.jsx";
import HOC from "./HOC/HoC.jsx";
import Memo from "./component/FunctionComponent/Memoization/Memo.jsx";
import LazyLoadingAndSuspense from "./component/FunctionComponent/Memoization/LazyLoadingAndSuspensse.jsx";
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
          <Route path="/use-ref" element={<UseRef />} />
          <Route path="/use-memo" element={<UseMemo />} />
          <Route path="/use-effect-api" element={<UseEffectApi />} />
          <Route path="/use-callback" element={<UseCallback />} />
          <Route path="/use-memoize" element={<UseMemoize />} />
          <Route path="/memo" element={<Memo />}/>
          <Route path="/lazy" element={<LazyLoadingAndSuspense />}/>
          <Route path="/hoc" element={<HOC />} />
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
