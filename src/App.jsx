import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../src/router/AppRouter.jsx";
// import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Loader from "./Components/Spinner/Loader.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
      {/* <ToastContainer /> */}
    </BrowserRouter>
  );
}