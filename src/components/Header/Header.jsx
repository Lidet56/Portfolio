import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import "./Header.layout.fix.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`header header-fixed header-1 ${
        isSticky ? "stricky-fixed" : ""
      }`}
    >
      <nav className="navbar navbar-default header-navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/" onClick={closeMenu}>
              <img src={Logo} alt="Lidet logo" />
            </Link>

            <button
              type="button"
              className={`navbar-toggle ${mobileMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div
            className={`navbar-collapse ${
              mobileMenuOpen ? "in" : ""
            }`}
            id="main-nav-bar"
          >
            <ul className="nav navbar-nav navigation-box main-navigation mainmenu one-page-scroll-menu">
              <li className="scrollToLink">
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="scrollToLink">
                <Link to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li className="scrollToLink">
                <Link to="/services" onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li className="scrollToLink">
                <Link to="/portfolio" onClick={closeMenu}>
                  Portfolio
                </Link>
              </li>
              <li className="scrollToLink">
                <Link to="/resume" onClick={closeMenu}>
                  Resume
                </Link>
              </li>
              <li className="scrollToLink">
                <Link to="/skills" onClick={closeMenu}>
                  Skills
                </Link>
              </li>
              <li className="scrollToLink">
                <Link to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../../assets/img/logo.png";
// import "./Header.layout.fix.css";

// const Header = () => {
//   const [isSticky, setIsSticky] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setIsSticky(window.scrollY > 100);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <header
//       className={`header header-fixed header-1 ${isSticky ? "stricky-fixed" : ""}`}
//     >
//       <nav className="navbar navbar-default header-navigation">
//         <div className="container-fluid">
//           <div className="navbar-header">
//             <Link className="navbar-brand" to="/">
//               <img src={Logo} alt="Lidet" />
//             </Link>
//           </div>

//           <div className="navbar-collapse" id="main-nav-bar">
//             <ul className="nav navbar-nav navigation-box main-navigation mainmenu one-page-scroll-menu">
//               <li className="scrollToLink">
//                 <Link to="/">Home</Link>
//               </li>
//               <li className="scrollToLink">
//                 <Link to="/about">About</Link>
//               </li>
//               <li className="scrollToLink">
//                 <Link to="/services">Service</Link>
//               </li>
//               <li className="scrollToLink">
//                 <Link to="/portfolio">Portfolio</Link>
//               </li>
//               <li className="scrollToLink">
//                 <Link to="/resume">Resume</Link>
//               </li>
//               <li className="scrollToLink">
//                 <Link to="/skills">Skill</Link>
//               </li>
//               <li className="scrollToLink">
//                 <Link to="/contact">Contact</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;