import React from "react";
import styles from "./updateuser.module.css";
import Image from "next/image";
import portfolio from "../../../../../public/palestine.jpg";
function UpdateUser() {
  return (
    <>
      <form className={styles.form}>
        <input
          className="col-5"
          type="text"
          name="title"
          id="title"
          placeholder="Title"
        />
        <select className="col-5" name="cat" id="cat">
          <option value="">Chooose a Category</option>
          <option value="laptop">Laptop</option>
          <option value="mobile">Mobile</option>
          <option value="iphone">Iphone</option>
          <option value="screen">Screen</option>
        </select>
        <input
          className="col-5"
          type="number"
          name="price"
          id="price"
          placeholder="Price"
        />
        <input
          className="col-5"
          type="number"
          name="Stock"
          id="Stock"
          placeholder="Stock"
        />
        <input
          className="col-5"
          type="text"
          name="color"
          id="color"
          placeholder="Color"
        />
        <input
          className="col-5"
          type="text"
          name="size"
          id="size"
          placeholder="Size"
        />
        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="8"
          className="col-12"
          placeholder="Description"
        ></textarea>
        <input
          className={`col-12 btn btn-info ${styles.submit}`}
          type="submit"
          value="Submit"
        />
      </form>
    </>
  );
}

export default UpdateUser;
