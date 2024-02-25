"use client";
import React from "react";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
function Navbar() {
  const pathname = usePathname();
  const cleanPathname = pathname.split("/").pop();
  console.log("🚀 ~ Navbar ~ pathname:", cleanPathname);
  return (
    <div>
      <nav className={`navbar  ${styles.navbar}`}>
        <div className="container-fluid">
          <a className={` ${styles.logo}`}>{cleanPathname}</a>
          <form className="d-flex" role="search">
            <input
              classname="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-secondary rounded-1">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
