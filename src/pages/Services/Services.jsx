import "./Services.css";

const servicesData = [
  {
    icon: "💻",
    title: "Frontend Development",
    desc: "I design and build responsive, interactive, and visually appealing user interfaces that improve usability and create a smooth experience for users on all devices.",
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    desc: "I develop secure and scalable backend systems using Node.js and databases, creating powerful APIs and server-side logic.",
  },
  {
    icon: "🌐",
    title: "Fullstack Web Applications",
    desc: "I create complete end-to-end web applications, integrating frontend and backend technologies for efficient and scalable solutions.",
  },
];

const Services = () => {
  return (
    <section className="services-area gray-pattern sec-pad" id="services">
      <div className="container">
        <div className="sec-title text-center">
          <h2>My Services</h2>
          <p>
            I provide full stack web development services, building responsive
            and dynamic websites with both front-end and back-end technologies.
            My goal is to create clean, modern, and efficient web applications
            that deliver a smooth user experience and solve real problems.
          </p>
          <div className="line"></div>
        </div>

        <div className="row">
          {servicesData.map((service, index) => (
            <div className="col-md-4 col-sm-6 col-xs-12" key={index}>
              <div className="single-service">
                <div
                  className="icon-box wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay={`${index * 0.3}s`}
                >
                  <div className="service-emoji">{service.icon}</div>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;