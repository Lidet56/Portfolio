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
           As a college student, I have developed strong communication, teamwork, and problem solving skills through working with others in class, completing projects, and managing different responsibilities. I am also building technical skills through my studies, while continuing to improve my ability to adapt, stay organized, and learn quickly. In addition, my experience as a real estate agent helper helped me strengthen my customer service, professionalism, attention to detail, and ability to work with different people. Overall, my skills reflect both my academic growth and my real world experience.
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
