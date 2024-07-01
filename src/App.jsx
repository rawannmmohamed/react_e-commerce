import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
      </Routes>
     
    </>
  );
}

export default App;
