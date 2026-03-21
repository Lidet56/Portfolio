import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
// import "./Header.css";
import "./Header.layout.fix.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`header header-fixed header-1 ${isSticky ? "stricky-fixed" : ""}`}
    >
      <nav className="navbar navbar-default header-navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className={`navbar-toggle ${mobileMenuOpen ? "" : "collapsed"}`}
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <a className="navbar-brand" href="/">
              <img src={Logo} alt="Lidet" />
            </a>
          </div>

          <div
            className={`collapse navbar-collapse ${mobileMenuOpen ? "in" : ""}`}
            id="main-nav-bar"
          >
            <ul className="nav navbar-nav navigation-box main-navigation mainmenu one-page-scroll-menu">
              <li className="scrollToLink">
                <Link to="/" smooth duration={700} onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="scrollToLink">
                <Link to="about" smooth duration={700} onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li className="scrollToLink">
                <Link to="services" smooth duration={700} onClick={closeMenu}>
                  Service
                </Link>
              </li>
              <li className="scrollToLink">
                <Link to="/portfolio" smooth duration={700} onClick={closeMenu}>
                  Portfolio
                </Link>
              </li>
              <li className="scrollToLink">
                <Link to="/resume" smooth duration={700} onClick={closeMenu}>
                  Resume
                </Link>
              </li>
              <li className="scrollToLink">
                <Link to="/skills" smooth duration={700} onClick={closeMenu}>
                  Skill
                </Link>
              </li>
              {/* <li className="scrollToLink">
                <Link to="/blog" smooth duration={700} onClick={closeMenu}>
                  Blog
                </Link>
              </li> */}
              <li className="scrollToLink">
                <Link to="/contact" smooth duration={700} onClick={closeMenu}>
                  Contact
                </Link>
              </li>
              {/* <li>
                <a href="#">Pages</a>
                <ul className="sub-menu right-align">
                  <li>
                    <a href="/">Home Page</a>
                  </li>
                  <li>
                    <a href="/blog-grid">Blog Grid</a>
                  </li>
                  <li>
                    <a href="/blog-left">Blog Left</a>
                  </li>
                  <li>
                    <a href="/blog-right">Blog Right</a>
                  </li>
                  <li>
                    <a href="/blog-details">Blog Details</a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
