import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import about1 from "../../assets/img/about-1.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-area sec-pad" id="about">
      <div className="container">
        <div className="sec-title text-center">
          <h2>About Me</h2>
          <p>
            I am a passionate and dedicated fullstack website developer with a
            strong background in creating dynamic and responsive web
            applications.
          </p>
          <div className="line"></div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <motion.div
              initial={{ opacity: 0, rotate: -5 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="about-content"
            >
              <h3>Fullstack Website Developer</h3>
              <p style={{ textAlign: "justify" }}>
                I am a passionate and dedicated fullstack website developer with
                a strong background in creating dynamic and responsive web
                applications. With a keen eye for detail and a commitment to
                delivering high-quality code, I strive to build seamless user
                experiences that not only meet but exceed client expectations.
                My expertise spans both frontend and backend development,
                allowing me to craft end-to-end solutions that are efficient,
                scalable, and visually appealing. I am constantly learning and
                adapting to new technologies, ensuring that my skills remain at
                the forefront of the ever-evolving web development landscape.
                <br />
              </p>
              <ul className="contact-info">
                <li>
                  <span>Name:</span> Lidet Legesse
                </li>
                <li>
                  <span>Email:</span> lidetlegesse@gmail.com
                </li>
                <li>
                  <span>Phone:</span> 240 883 2102
                </li>
              </ul>
              <div className="button-box">
                <Link to="/contact" className="thm-btn">
                  Hire Me
                </Link>
                <a
                  href="/Lidet-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="thm-btn borderd"
                >
                  View CV
                </a>
              </div>
            </motion.div>
          </div>
          <div className="col-md-5 clearfix">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="about-img-box pull-right"
            >
              <img src={about1} alt="Awesome Image" />
            </motion.div>
          </div>
        </div>
        {/* <p className="about-text">
          I am a passionate and dedicated fullstack website developer with a
          strong background in creating dynamic and responsive web applications.
          With a keen eye for detail and a commitment to delivering high-quality
          code, I strive to build seamless user experiences that not only meet
          but exceed client expectations. My expertise spans both frontend and
          backend development, allowing me to craft end-to-end solutions that
          are efficient, scalable, and visually appealing. I am constantly
          learning and adapting to new technologies, ensuring that my skills
          remain at the forefront of the ever-evolving web development
          landscape.  
        </p> */}
      </div>
    </section>
  );
};

export default About;
