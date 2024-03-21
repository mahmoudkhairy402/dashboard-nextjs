"use client";
import React, { useRef, useState } from "react";
import styles from "./addproduct.module.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/navigation";

function Adduser() {
  const router = useRouter();

  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  let CreatedAt =
    year +
    "-" +
    (month < 10 ? "0" : "") +
    month +
    "-" +
    (day < 10 ? "0" : "") +
    day +
    " " +
    (hours < 10 ? "0" : "") +
    hours +
    ":" +
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds;

  const [user, setUser] = useState({
    date: { CreatedAt },
    username: "",
    email: "",
    phone: "",
    location: "",
    password: "",
  });
  const [errors, setErrors] = useState({}); // State to hold form field errors

  const validateForm = () => {
    let formErrors = {};

    if (!user.username.trim()) {
      formErrors.username = "Username is required";
    }

    if (!user.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      formErrors.email = "Invalid email address";
    }

    if (!user.phone.trim()) {
      formErrors.phone = "Phone number is required";
    }

    if (!user.password.trim()) {
      formErrors.password = "Password is required";
    } else if (user.password.trim().length < 6) {
      formErrors.password = "Password must be at least 6 characters long";
    }

    if (user.isadmin === "") {
      formErrors.isadmin = "Please select admin status";
    }

    if (user.activation === "") {
      formErrors.activation = "Please select activation status";
    }

    if (!user.location.trim()) {
      formErrors.location = "Location is required";
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const [isloadind, setisloading] = useState(false);

  const inpref = useRef(null);

  let handleChange = (e) => {
    // console.log(e);
    const { name, value } = e.target;
    setUser((old) => ({
      ...old,
      [name]: value,
    }));
  };

  let add = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setisloading(true);
      axios
        .post(`http://localhost:3030/users`, user)
        .then((res) => {
          console.log(res);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Added Successfully",
          });
          router.push("/dashboard/users");
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setisloading(false);
        });
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={add}>
        <div className="username col-5">
          <input
            className="w-100"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            ref={inpref}
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>
        <div className="email col-5">
          <input
            className="w-100"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="password col-5">
          <input
            className="w-100"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div className="phone col-5">
          <input
            className="w-100"
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone Number"
            value={user.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>
        <div className="isadmin col-5">
          <select
            className="w-100"
            name="isadmin"
            value={user.isadmin}
            onChange={handleChange}
            id="usertype"
          >
            <option value={false}>IS Admin</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          {errors.isadmin && <div className="error">{errors.isadmin}</div>}
        </div>
        <div className="isactive col-5">
          <select
            className="w-100"
            name="activation"
            value={user.activation}
            onChange={handleChange}
            id="activation"
          >
            <option value={false}>Is Active</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          {errors.activation && (
            <div className="error">{errors.activation}</div>
          )}
        </div>
        <div className="address col-12">
          <textarea
            name="location"
            id="address"
            cols="30"
            rows="4"
            className="w-100"
            placeholder="Address"
            onChange={handleChange}
          ></textarea>
          {errors.location && <div className="error">{errors.location}</div>}
        </div>
        <button type="submit" disabled={isloadind} className={`col-12 submit`}>
          {isloadind ? "loading..." : "add"}
        </button>
      </form>
    </>
  );
}

export default Adduser;
