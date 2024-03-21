"use client";
import React, { useRef, useState } from "react";
import styles from "./addproduct.module.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/navigation";

function AddProduct() {
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

  const [product, setProduct] = useState({
    title: "",
    description: "",
    date: { CreatedAt },
    cat: "",
    price: 3,
    inStock: false,
    color: "",
    img: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg?width=550",
  });

  const [errors, setErrors] = useState({}); // State to hold form field errors
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state

  const inpref = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};

    if (!product.title.trim()) {
      formErrors.title = "Title is required";
    }

    if (!product.cat.trim()) {
      formErrors.cat = "Category is required";
    }

    if (!product.price || isNaN(product.price)) {
      formErrors.price = "Price must be a valid number";
    } else if (product.price < 0) {
      formErrors.price = "Price must be a positive number";
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const addProduct = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      axios
        .post(`http://localhost:2000/products`, product)
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
          router.push("/dashboard/products");
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={addProduct}>
        <div className="col-5">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={product.title}
            onChange={handleChange}
            className={`w-100`}
          />
          {errors.title && <div className="error">{errors.title}</div>}
        </div>
        <div className="col-5">
          <select
            name="cat"
            id="cat"
            value={product.cat}
            onChange={handleChange}
            className={`w-100`}
          >
            <option value="">Choose a Category</option>
            <option value="laptop">Laptop</option>
            <option value="mobile">Mobile</option>
            <option value="iphone">Iphone</option>
            <option value="screen">Screen</option>
          </select>
          {errors.cat && <div className="error">{errors.cat}</div>}
        </div>
        <div className="col-5">
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className={`w-100`}
          />
          {errors.price && <div className="error">{errors.price}</div>}
        </div>
        <div className="col-5">
          <select
            name="inStock"
            id="inStock"
            value={product.inStock}
            onChange={handleChange}
            className="w-100"
          >
            <option value={true}>In Stock</option>
            <option value={false}>Out of Stock</option>
          </select>
        </div>
        <div className="col-5">
          <input
            type="text"
            name="color"
            id="color"
            placeholder="Color"
            value={product.color}
            onChange={handleChange}
            className="w-100"
          />
        </div>
        <div className="col-12">
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="8"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            className="w-100"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`col-12 submit ${isLoading ? "disabled" : ""}`}
        >
          {isLoading ? "Loading..." : "Add"}
        </button>
      </form>
    </>
  );
}

export default AddProduct;
