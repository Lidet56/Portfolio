import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import Services from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio/Portfolio";
import Resume from "../pages/Resume/Resume";
import Skills from "../components/Skills/Skills";
import Contact from "../components/Contact/Contact";
import Preloader from "../components/Preloader/Preloader";

const Home = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Banner />
      <About />
      <Services />
      <Portfolio />
      <Resume />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;

// import Header from "../components/Header/Header";
// import Banner from "../components/Banner/Banner";
// import Preloader from "../components/Preloader/Preloader";
// // import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

// const Home = () => {
//   return (
//     <>
//       <Preloader />
//       <Header />
//       <Banner />
//     </>
//   );
// };

// export default Home;
