import logo4 from "../assets/images/logo4.jpg";
import { pageLinks, socialLinks } from "../data";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [showLinks, setShowLinks] = useState(true);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo4} className="logo" alt="backroads" />
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={toggleLinks}
          >
            <FaBars />
          </button>
        </div>
        {showLinks && (
          <div className="links-container">
            <ul className="links" id="links">
              {pageLinks.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.href} className="nav-link">
                      {link.text}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <ul className="social-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
