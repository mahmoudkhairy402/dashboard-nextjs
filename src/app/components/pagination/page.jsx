"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

function Pagination({ hasNext }) {
  console.log("🚀 ~ Pagination ~ hasNext:", hasNext);
  const [hasprev, setHasPrev] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const handlePreviousPage = () => {
    const params = new URLSearchParams(searchParams);
    const currentPage = parseInt(params.get("page")) || 1;

    if (currentPage > 1) {
      setHasPrev(true);
      params.set("page", currentPage - 1);
      router.replace(`${pathName}?${params}`);
    } else {
      setHasPrev(false);
    }
  };

  const handleNextPage = () => {
    const params = new URLSearchParams(searchParams);
    const currentPage = parseInt(params.get("page")) || 1;
    params.set("page", currentPage + 1);
    setHasPrev(true);
    router.replace(`${pathName}?${params}`);
  };

  return (
    <div className="d-flex justify-content-between w-100">
      <button
        className="btn btn-secondary text-light"
        onClick={handlePreviousPage}
        disabled={!hasprev}
      >
        <FaRegArrowAltCircleLeft
          size={22}
          color="#fff"
          className="mx-1 my-auto"
        />
        Previous
      </button>
      <button
        className="btn btn-secondary text-light"
        onClick={handleNextPage}
        disabled={hasNext}
      >
        Next{" "}
        <FaRegArrowAltCircleRight
          size={22}
          color="#fff"
          className="mx-1 my-auto"
        />
      </button>
    </div>
  );
}

export default Pagination;
