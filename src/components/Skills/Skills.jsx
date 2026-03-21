import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./Skills.css";

const skillsLeft = [
  { name: "Team Work", percent: 90 },
  { name: "React", percent: 80 },
  { name: "JAVA/JAVA SCRIPT", percent: 85 },
];

const skillsRight = [
  { name: "HTML/CSS", percent: 99 },
  { name: "Jequery", percent: 80 },
  { name: "Wordpress", percent: 70 },
];

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="my-skills-area sec-pad" id="skills" ref={ref}>
      <div className="container">
        <div className="sec-title text-center">
          <h2>My Skills</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt <br />
            mollit anim id est laborum Sed ut perspiciatis unde omnis.
          </p>
          <div className="line"></div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="progress-box-wrapper">
              {skillsLeft.map((skill, idx) => (
                <div className="single-progress" key={idx}>
                  <p>{skill.name}</p>
                  <div className="progress-box">
                    <div
                      className="inner"
                      style={{
                        width: inView ? `${skill.percent}%` : "0%",
                        transition: "width 2s ease-out",
                      }}
                    >
                      <span className="percent">
                        {inView ? (
                          <CountUp end={skill.percent} duration={2} />
                        ) : (
                          0
                        )}
                        %
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <div className="progress-box-wrapper">
              {skillsRight.map((skill, idx) => (
                <div className="single-progress" key={idx}>
                  <p>{skill.name}</p>
                  <div className="progress-box">
                    <div
                      className="inner"
                      style={{
                        width: inView ? `${skill.percent}%` : "0%",
                        transition: "width 2s ease-out",
                      }}
                    >
                      <span className="percent">
                        {inView ? (
                          <CountUp end={skill.percent} duration={2} />
                        ) : (
                          0
                        )}
                        %
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
