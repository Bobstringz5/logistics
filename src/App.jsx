import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Stat from "./pages/Stat";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white transition duration-300">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Stat />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
