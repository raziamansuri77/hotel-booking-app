import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Blog from "./components/Blog/Blog";
import ContactUs from "./components/ContactUs/ContactUs";
import OurRoom from "./components/OurRoom/OurRoom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/OurRoom" element={<OurRoom />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
