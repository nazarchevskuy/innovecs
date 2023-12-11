import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContainerComponent = () => (
  <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    draggable
    pauseOnHover
    style={{ width: "250px" }}
  />
);

export default ToastContainerComponent;
