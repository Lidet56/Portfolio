import { useForm } from "react-hook-form";
import "./Contact.css";
import "./Contact.errors.css";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message sent!");
  };

  return (
    <div className="contact-area gray-pattern sec-pad" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="contact-text">
              <h3>Get In Touch</h3>
              <p style={{ textAlign: "justify" }}>
                I’m always excited to explore new opportunities and
                collaborations. Whether you have a specific project in mind, a
                question about my work, or just want to say hello, please don't
                hesitate to reach out. I value every connection and look forward
                to discussing how we can work together to bring your ideas to
                life. You can contact me directly via the form on the right, or
                through email and phone. Let’s connect and see what we can build
                together!
              </p>
              <ul className="contact-info">
                <li>
                  <i className="fa fa-map-marker"></i> Maryland
                </li>
                <li>
                  <i className="fa fa-phone"></i> 240 883 2102
                </li>
                <li>
                  <i className="fa fa-envelope"></i> legesselidet@gmail.com
                </li>
              </ul>
              <div className="social">
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-vimeo"></a>
                <a href="#" className="fa fa-linkedin"></a>
                <a href="#" className="fa fa-rss"></a>
                <a href="#" className="fa fa-google-plus"></a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <input
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
              />
              {errors.name && <span className="error">Name is required</span>}

              <input
                type="email"
                placeholder="Your Email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && (
                <span className="error">Valid email is required</span>
              )}

              <textarea
                placeholder="Your Text"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <span className="error">Message is required</span>
              )}

              <button className="thm-btn" type="submit">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
