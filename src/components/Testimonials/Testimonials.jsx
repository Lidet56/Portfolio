import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Misti Bubrig",
    text: "Lorem ipsum dolor sit amet constur adipisicing elit sed do eiusmtempor incid et dolore magna <br />aliqu enim minim veniam quis nostrud exercittion ullamco laboris nisi ut aliquip excepteur sint <br />occaecat cui",
  },
  {
    name: "Nathan Kliger",
    text: "Lorem ipsum dolor sit amet constur adipisicing elit sed do eiusmtempor incid et dolore magna <br />aliqu enim minim veniam quis nostrud exercittion ullamco laboris nisi ut aliquip excepteur sint <br />occaecat cui",
  },
  {
    name: "Summer Kiener",
    text: "Lorem ipsum dolor sit amet constur adipisicing elit sed do eiusmtempor incid et dolore magna <br />aliqu enim minim veniam quis nostrud exercittion ullamco laboris nisi ut aliquip excepteur sint <br />occaecat cui",
  },
  {
    name: "Augusta Kolassa",
    text: "Lorem ipsum dolor sit amet constur adipisicing elit sed do eiusmtempor incid et dolore magna <br />aliqu enim minim veniam quis nostrud exercittion ullamco laboris nisi ut aliquip excepteur sint <br />occaecat cui",
  },
];

const Testimonials = () => {
  return (
    <section className="review-area gray-pattern sec-pad">
      <div className="container">
        <div className="sec-title text-center">
          <h2>Reviews</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt <br />
            mollit anim id est laborum Sed ut perspiciatis unde omnis.
          </p>
          <div className="line"></div>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".owl-prev",
            nextEl: ".owl-next",
          }}
          loop={true}
          className="testimonial-carousel owl-theme owl-carousel"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="item">
                <div className="single-testimonial">
                  <div className="inner">
                    <div className="icon-box">
                      <img src="/img/testi-1.png" alt="Awesome Image" />
                    </div>
                    <p dangerouslySetInnerHTML={{ __html: testimonial.text }} />
                    <h3>{testimonial.name}</h3>
                    <span>Happy Client</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="owl-nav">
            <button className="owl-prev">
              <img src="/img/testi-arrow-left.png" alt="Prev" />
            </button>
            <button className="owl-next">
              <img src="/img/testi-arrow-right.png" alt="Next" />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
