import React from "react";
import styles from "./search.module.css";
import Link from "next/link";
function Search({ pageName, pathname }) {
  return (
    <div className={`d-flex justify-content-between w-100 ${styles.search}`}>
      <form className="d-flex" role="search">
        <input
          classname="form-control me-2"
          type="search"
          placeholder={`search for a ${pageName}`}
          aria-label="Search"
        />
      </form>
      <Link href={`${pathname}`}>
        <button
          className="btn btn-success rounded-1 text-capitalize"
          style={{
            padding: "3px 5px",
            backgroundColor: "green",
            fontSize: "14px",
          }}
        >
          add new {pageName}
        </button>
      </Link>
    </div>
  );
}

export default Search;
