import React from "react";
import styles from "./addproduct.module.css";
function AddProduct() {
  return (
    <>
      <form className={styles.form}>
        <input
          className="col-5"
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
        <input
          className="col-5"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input
          className="col-5"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input
          className="col-5"
          type="tel"
          name="phone"
          id="phone"
          placeholder="Phone Number"
        />

        <select className="col-5" name="role" id="role">
          <option value={false}>IS Admin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select className="col-5" name="activation" id="activation">
          <option value={false}>Is Active</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="8"
          className="col-12"
          placeholder="Adress"
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

export default AddProduct;
