import React from "react";
import Sidebar from "../components/sidebar/page";
import Navbar from "../components/navbar/page";
import styles from "./dashboard.module.css";
function layout({ children }) {
  return (
    <>
      <div
        className={` d-flex gap-5 ${styles.containerall} `}
        style={{ height: "100vh" }}
      >
        <div className="sidebar col-sm-2 col-md-3">
          <Sidebar />
        </div>
        <div className={` col-sm-9 col-md-8 ${styles.content}`}>
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
}

export default layout;
