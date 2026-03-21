import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";

function SharedLayout() {
  return (
    <div id="main-wrapper">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default SharedLayout;
