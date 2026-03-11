import { Link } from "react-router-dom";
import Icons from "../components/Icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">C-ENTERPRISE</h2>
          <p className="text-gray-400">
            Reliable transport and logistics solutions worldwide.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Air Freight</li>
            <li>Ocean Freight</li>
            <li>Warehousing</li>
            <li>Road Transport</li>
          </ul>
        </div>

        <div>
          <h3 className="absolute font-semibold mb-4">Contact</h3>
          <Icons />
        </div>
      </div>

      <div className="text-center mt-10 text-gray-500">
        © {new Date().getFullYear()} C-enterprise. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
