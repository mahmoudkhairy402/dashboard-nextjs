import React from "react";
import styles from "./updateuser.module.css";
import Image from "next/image";
import portfolio from "../../../../../public/palestine.jpg";
function UpdateUser() {
  return (
    <>
      <div className={`${styles.updateContainer} `}>
        <div className={`${styles.viewside} col-3`}>
          <div className={styles.image}>
            <Image
              src={portfolio}
              objectFit="coverd"
              fill="true"
              className="rounded-2 mb-2"
            />
          </div>
          <div className={styles.username}>mahmoudkhairy</div>
        </div>
        <form className={`${styles.form} col-8`}>
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
            name="address"
            id="address"
            cols="30"
            rows="4"
            className="col-12"
            placeholder="Address"
          ></textarea>
          <input
            className={`col-12 btn btn-info ${styles.submit}`}
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </>
  );
}

export default UpdateUser;
