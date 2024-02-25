import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

function Pagination() {
  return (
    <div className="d-flex justify-content-between w-100">
      <div className="btn btn-secondary text-light">
        <FaRegArrowAltCircleLeft
          size={22}
          color="#fff"
          className="mx-1 my-auto"
        />
        Previous
      </div>
      <div className="btn btn-secondary text-light">
        Next{" "}
        <FaRegArrowAltCircleRight
          size={22}
          color="#fff"
          className="mx-1 my-auto"
        />
      </div>
    </div>
  );
}

export default Pagination;
