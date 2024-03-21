"use client";
import React, { useState } from "react";
import styles from "./search.module.css";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
function Search({ pageName, pathname }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  let handleSearchQuery = (e) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      params.set(pageName, e.target.value);
    } else {
      params.delete(pageName);
    }
    router.replace(`${pathName}?${params}`);
  };
  return (
    <div className={`d-flex justify-content-between w-100 ${styles.search}`}>
      <form className="d-flex" role="search">
        <input
          classname="form-control me-2"
          type="search"
          placeholder={`search for a ${pageName}`}
          aria-label="Search"
          onChange={handleSearchQuery}
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
