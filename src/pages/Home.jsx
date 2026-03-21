import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Preloader from "../components/Preloader/Preloader";
// import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Home = () => {
  return (
    <>
      <Preloader />
      <Header />
      <Banner />
    </>
  );
};

export default Home;
