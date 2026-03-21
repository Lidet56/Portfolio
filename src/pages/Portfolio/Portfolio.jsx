import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import netflix from "../../assets/img/netflix.png";
import amazone from "../../assets/img/amazone.png";
import evangadiform from "../../assets/img/evangadiforum.png";
// import portfolio4 from "../../assets/img/portfolio-4.jpg";
// import portfolio5 from "../../assets/img/portfolio-5.jpg";
// import portfolio6 from "../../assets/img/portfolio-6.jpg";
import "./Portfolio.css";

const portfolioItems = [
  {
    id: 1,
    img: netflix,
    category: "web",
    title: "Netflix movie Streaming Demo",
    subtitle: "Development",
    github: "https://github.com/Lidet56/Netflix-Clone-2025",
    demo: "https://chimerical-crepe-71835b.netlify.app/",
  },
  {
    id: 2,
    img: amazone,
    category: "ui",
    title: "Amazon E-commerce Platform",
    subtitle: "Development",
    github: "https://github.com/Lidet56/Amazon-clone-2025",
    demo: "https://wondrous-boba-6ce8c3.netlify.app/",
  },
  {
    id: 3,
    img: evangadiform,
    category: "web",
    title: "Evangadi Form",
    subtitle: "Development",
    github: "https://github.com/mikretadesse/evangadi-forum-G3",
    demo: "https://evangadi-front.netlify.app/",
  },
];

const categories = [
  { key: "*", label: "All" },
  { key: "web", label: "Development" },
  { key: "ui", label: "Web Design" },
  { key: "photo", label: "Photography" },
  { key: "branding", label: "Branding" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("*");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filteredItems = useMemo(() => {
    if (filter === "*") return portfolioItems;
    return portfolioItems.filter((item) => item.category === filter);
  }, [filter]);

  const slides = filteredItems.map((item) => ({ src: item.img }));

  return (
    <section className="portfolio-area sec-pad" id="portfolio">
      <div className="container">
        <div className="top-box clearfix">
          <div className="sec-title pull-left">
            <h2>My Portfolio</h2>
            <p>
              {/* //just real projects, no lorem ipsum  */}
              Here are some of my recent projects that showcase my skills and
              experience in web development and design. Each project
              demonstrates my ability to create dynamic and responsive web
              applications that provide seamless user experiences. I am proud of
              the work I have done and am always looking for new opportunities
              to grow and improve my skills.
              <br />
            </p>
            <div className="line"></div>
          </div>

          <div className="portfolio-filter pull-right">
            <ul className="list-inline post-filter masonary">
              {categories.map((c) => (
                <li
                  key={c.key}
                  className={`filter ${filter === c.key ? "active" : ""}`}
                  onClick={() => setFilter(c.key)}
                >
                  <span>{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* IMPORTANT: keep .row on normal div */}
        <div className="masonary-layout filter-layout portfolio-wrapper">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <div
                className="col-md-4 col-sm-6 col-xs-12 masonary-item"
                key={item.id}
              >
                {/* Animate inner wrapper, not bootstrap column */}
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="single-portfolio">
                    <img src={item.img} alt={item.title} />
                    <div className="overlay">
                      <div className="content">
                        <div className="box">
                          <div className="portfolio-links">
                            <a
                              href={item.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="portfolio-btn"
                            >
                              <i className="fa fa-github" title="github"></i>{" "}
                              <br />
                              Github
                            </a>

                            <a
                              href={item.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="portfolio-btn demo"
                            >
                              <i
                                className="fa fa-external-link"
                                title="Live Demo"
                              ></i>{" "}
                              <br />
                              Live Demo
                            </a>
                          </div>

                          <h3>{item.title}</h3>
                          <p>{item.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
      />
    </section>
  );
}
