// const Footer = () => {
//   return (
//     <footer className='px-4 divide-y  text-gray-800 relative bottom-0 left-0'>
//       <div className='py-6 text-sm text-center text-gray-400'>
//         © 2025-2026 PlantNet Inc. All rights reserved.
//       </div>
//     </footer>
//   )
// }

// export default Footer

// import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">ClubSphere</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              ClubSphere is a modern platform that helps people discover, join,
              and manage local clubs and events with ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/clubs" className="hover:text-white transition">
                  Clubs
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white transition">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-white transition">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/" className="hover:text-white transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-white transition">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-focus hover:bg-primary transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-focus hover:bg-primary transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-focus hover:bg-primary transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-neutral-focus hover:bg-primary transition"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-focus mt-10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} ClubSphere. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
