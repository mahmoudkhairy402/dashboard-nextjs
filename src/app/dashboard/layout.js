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
        <div className="sidebar col-3">
          <Sidebar />
        </div>
        <div className={` col-8 ${styles.content}`}>
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
}

export default layout;
