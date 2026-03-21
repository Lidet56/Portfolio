import "./Services.css";
const servicesData = [
  {
    icon: "kerian-icon-competition",
    title: "Frontend Development",
    desc: "Lorem ipsum dolor sit amet constur adipisic- ing elit sed do eiusmtempor incid.",
  },
  {
    icon: "kerian-icon-html",
    title: "Backend Development",
    desc: "I develop secure and scalable backend systems using Node.js and databases, creating powerful APIs and server-side logic.",
  },
  {
    icon: "kerian-icon-attach",
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
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt <br />
            mollit anim id est laborum Sed ut perspiciatis unde omnis.
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
                  <i className={service.icon}></i>
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
