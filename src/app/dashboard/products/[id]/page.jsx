"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./updateproduct.module.css";
import Image from "next/image";
import portfolio from "../../../../../public/palestine.jpg";
import axios from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

function Updateproduct({ params }) {
  const router = useRouter();

  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  let UpdatedAt =
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

  const [product, setProduct] = useState({});
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const id = params.id;
  const inpref = useRef(null);

  const getProduct = useCallback(() => {
    axios
      .get(`http://localhost:2000/products/${id}`)
      .then((res) => {
        const updatedProduct = {
          ...res.data,
          date: { ...res.data.date, UpdatedAt: UpdatedAt },
        };
        setProduct(updatedProduct);
        console.log("🚀 ~ .then ~ res.data:", res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    inpref.current?.focus();
    getProduct();
    console.log(product);
  }, []);

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
    }

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };

  const updateProduct = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);

      axios
        .patch(`http://localhost:2000/products/${id}`, product)
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
            title: "Updated Successfully",
          });
          router.push("/dashboard/products");
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <div className={`${styles.updateContainer}`}>
        <div className={`${styles.viewside} col-3`}>
          <div className={styles.image}>
            <Image
              src={portfolio}
              objectFit="coverd"
              fill="true"
              className="rounded-2 mb-2"
            />
          </div>
          <div className={styles.productname}>{product.productname}</div>
        </div>
        <form className={`${styles.form} col-8`} onSubmit={updateProduct}>
          <div className="col-5">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              onChange={handleChange}
              value={product.title}
              ref={inpref}
              className="w-100"
            />
            {errors.title && <div className="error">{errors.title}</div>}
          </div>
          <div className="col-5">
            <select
              onChange={handleChange}
              value={product.cat}
              name="cat"
              id="cat"
              className="w-100"
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
              onChange={handleChange}
              value={product.price}
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              className="w-100"
            />
            {errors.price && <div className="error">{errors.price}</div>}
          </div>
          <div className="col-5">
            <select
              onChange={handleChange}
              value={product.inStock}
              name="inStock"
              id="inStock"
              className="w-100"
            >
              <option value={false}>In Stock</option>
              <option value={true}>yes</option>
              <option value={false}>no</option>
            </select>
          </div>
          <div className="col-5">
            <input
              onChange={handleChange}
              value={product.color}
              type="text"
              name="color"
              id="color"
              placeholder="Color"
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
              onChange={handleChange}
              value={product.description}
              className="w-100"
            ></textarea>
          </div>
          <button
            disabled={isLoading}
            className={`col-12 submit `}
            type="submit"
          >
            {isLoading ? "Loading..." : "Update"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Updateproduct;
