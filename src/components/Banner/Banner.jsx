import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { ReactTyped } from "react-typed";
import "./Banner.css";
import BannerImage from "../../assets/img/banner-1.jpg";

const Banner = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="banner" id="home">
      <Particles
        id="particles-js"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: "transparent",
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 60,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              outModes: {
                default: "bounce",
              },
            },
            size: {
              value: { min: 1, max: 3 },
            },
            opacity: {
              value: 0.5,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
              },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="banner-img-box">
              <img src={BannerImage} alt="Lidet" />
            </div>
          </div>

          <div className="col-md-6">
            <div className="banner-content">
              <div className="title">
                Hi I Am <br />
                <div className="type-wrap">
                  <ReactTyped
                    strings={["Lidet Legesse", "Full Stack Developer"]}
                    typeSpeed={90}
                    backSpeed={45}
                    startDelay={300}
                    backDelay={1400}
                    loop
                    smartBackspace
                    cursorChar="|"
                    showCursor
                  />
                </div>
              </div>

              <p>
                I have a passion for creating dynamic and responsive web
                applications that provide seamless user experiences. With
                expertise in both front-end and back-end technologies, I am
                dedicated to delivering high-quality solutions that meet client
                needs and exceed expectations.
              </p>

              <div className="button-box">
                <a href="#portfolio" className="thm-btn">
                  Portfolio
                </a>

                <a href="#resume" className="thm-btn borderd">
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

// import React, { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadSlim } from "tsparticles-slim";
// import { ReactTyped } from "react-typed";
// import { Link } from "react-router-dom";
// import "./Banner.css";
// import BannerImage from "../../assets/img/banner-1.jpg";

// const Banner = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadSlim(engine);
//   }, []);

//   return (
//     <section className="banner">
//       <Particles
//         id="particles-js"
//         init={particlesInit}
//         options={{
//           fullScreen: false,
//           background: {
//             color: "transparent",
//           },
//           fpsLimit: 60,
//           particles: {
//             number: {
//               value: 60,
//               density: {
//                 enable: true,
//                 area: 800,
//               },
//             },
//             color: {
//               value: "#ffffff",
//             },
//             links: {
//               enable: true,
//               color: "#ffffff",
//               distance: 150,
//               opacity: 0.4,
//               width: 1,
//             },
//             move: {
//               enable: true,
//               speed: 2,
//               outModes: {
//                 default: "bounce",
//               },
//             },
//             size: {
//               value: { min: 1, max: 3 },
//             },
//             opacity: {
//               value: 0.5,
//             },
//           },
//           interactivity: {
//             events: {
//               onHover: {
//                 enable: true,
//                 mode: "repulse",
//               },
//               resize: true,
//             },
//             modes: {
//               repulse: {
//                 distance: 100,
//               },
//             },
//           },
//           detectRetina: true,
//         }}
//       />
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <div className="banner-img-box">
//               <img src={BannerImage} alt="Lidet" />
//             </div>
//           </div>

//           <div className="col-md-6">
//             <div className="banner-content">
//               <div className="title">
//                 Hi I Am <br />
//                 <div className="type-wrap">
//                   <ReactTyped
//                     strings={["Lidet Legesse", "Full Stack Developer"]}
//                     typeSpeed={90}
//                     backSpeed={45}
//                     startDelay={300}
//                     backDelay={1400}
//                     loop
//                     smartBackspace
//                     cursorChar="|"
//                     showCursor
//                   />
//                 </div>
//               </div>

//               <p>
//                 I have a passion for creating dynamic and responsive web
//                 applications that provide seamless user experiences. With
//                 expertise in both front-end and back-end technologies, I am
//                 dedicated to delivering high-quality solutions that meet client
//                 needs and exceed expectations.
//               </p>

//               <div className="button-box">
//                 <Link to="/Portfolio" className="thm-btn">
//   Portfolio
// </Link>

// <Link to="/Resume" className="thm-btn borderd">
//   Resume
// </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;