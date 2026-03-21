import "./Resume.css";

const resumeData = [
  {
    degree: "High School Diploma",
year: "2021",
title: "Secondary Education",
desc: "Completed high school education with a focus on mathematics and science, building a strong academic foundation for university studies in technology.",
  },
  // {
  //   degree: "Masters of Science",
  //   year: "2015-2018",
  //   title: "Concept & Animation",
  //   desc: "Totam rem aperiam eaque ipsa quae illo inventore veritatis et quasi architebetea.vitae dicta sunt explicabo. nemo enim ipsam volup as tatem quia voluptassit. aspernatur.aut odit aut fugit, sed quia consequntur magni dolores eo ratione voluptatem.",
  // },
  
];

const Resume = () => {
  return (
    <section className="resume-area sec-pad" id="resume">
      <div className="container">
        <div className="sec-title text-center">
          <h2>Resume</h2>
          <p>
            Motivated university student pursuing a Bachelor’s degree in Software Engineering and Cybersecurity. Strong foundation in programming, web development, and system fundamentals through academic coursework and hands-on projects. Experienced in building full-stack applications and deploying web projects.Passionate about problem-solving, security principles, and continuous learning in technology.
           
          </p>
          <div className="line"></div>
        </div>
        {resumeData.map((item, index) => (
          <div className="single-resume" key={index}>
            <div className="row">
              <div className="col-md-3">
                <div className="education-name">
                  <h3>{item.degree}</h3>
                  <p>{item.year}</p>
                </div>
              </div>
              <div className="col-md-9">
                <div className="education-info">
                  <div className="inner">
                    <h3>{item.title}</h3>
                    <div className="line"></div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        
      </div>
    </section>
  );
};

export default Resume;
