"use client";
import React, { useState, useEffect, useCallback } from "react";
import styles from "./products.module.css";
import Search from "../../components/search/page";
import profile from "../../../../public/palestine.jpg";
import { LuEye } from "react-icons/lu";
import { RiDeleteBin2Line } from "react-icons/ri";

import Image from "next/image";
import Pagination from "../../components/pagination/page";
import Link from "next/link";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

function products() {
  const [products, setproducts] = useState(null);
  const [filteredproducts, setFilteredproducts] = useState(products);
  const searchParams = useSearchParams();
  const productQuery = searchParams.get("product");
  const pageNumbr = searchParams.get("page") || 1;
  const productsPerPage = 4;
  console.log("🚀 ~ products ~ pageNumbr:", pageNumbr);
  console.log("🚀 ~ products ~ productQuery:", productQuery);

  const indexOfLastproduct = pageNumbr * productsPerPage;
  console.log("🚀 ~ products ~ indexOfLastproduct:", indexOfLastproduct);
  const indexOfFirstproduct = indexOfLastproduct - productsPerPage;
  const currentproducts = filteredproducts
    ? filteredproducts.slice(indexOfFirstproduct, indexOfLastproduct)
    : null;

  const getproducts = useCallback(() => {
    axios
      .get(`http://localhost:2000/products`)
      .then((res) => {
        setproducts(res.data);
        console.log("🚀 ~ .then ~ res.data:", res.data);
      })
      .catch((err) => console.log(err));
  });

  const deleteproduct = useCallback((product) => {
    Swal.fire({
      theme: "Borderless",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: `${product.title} has been deleted.`,
          icon: "success",
        });

        axios
          .delete(`http://localhost:2000/products/${product.id}`)
          .then((res) => {
            getproducts();
            console.log("🚀 ~ .then ~ res.data:", res.data);
          })
          .catch((err) => console.log(err));
      }
    });
  });

  useEffect(() => {
    getproducts();
  }, []);

  useEffect(() => {
    if (productQuery) {
      const filtered =
        products &&
        products.filter((product) =>
          product.title.toLowerCase().includes(productQuery.toLowerCase())
        );
      setFilteredproducts(filtered);
    } else {
      setFilteredproducts(products);
    }
  }, [productQuery, products]);

  return (
    <>
      <div className={`${styles.products}`}>
        <Search pageName={"product"} pathname={"products/add"} />
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>title</th>
                <th>description</th>
                <th>Created at</th>
                <th>price</th>
                <th>stock</th>
              </tr>
            </thead>
            <tbody>
              {productQuery && filteredproducts ? (
                filteredproducts.map((product) => {
                  return (
                    <tr key={product.id} className={`${styles.fadeIn}`}>
                      {" "}
                      <td>
                        <Image
                          src={profile}
                          width={40}
                          height={40}
                          objectFit="true"
                          className="me-2 rounded-5"
                        />
                        {product.title}
                      </td>
                      <td>{product.description}</td>
                      <td>{product.date.CreatedAt}</td>
                      <td>{product.price}</td>
                      <td
                        className={
                          product.inStock ? styles.instock : styles.notinstock
                        }
                      >
                        {product.inStock ? "in stock" : "coming soon"}
                      </td>
                      <td className="d-flex gap-1 justify-content-between">
                        <Link href={`products/${product.id}`}>
                          <LuEye
                            title="view & update"
                            className={`${styles.icon} ${styles.view}`}
                            size={25}
                          />
                        </Link>
                        <RiDeleteBin2Line
                          onClick={() => {
                            deleteproduct(product);
                          }}
                          title="Delete"
                          className={`${styles.icon} ${styles.delete}`}
                          size={25}
                        />
                      </td>
                    </tr>
                  );
                })
              ) : currentproducts ? (
                currentproducts.map((product) => {
                  return (
                    <tr key={product.id} className={`${styles.fadeIn}`}>
                      {" "}
                      <td>
                        <Image
                          src={profile}
                          width={40}
                          height={40}
                          objectFit="true"
                          className="me-2 rounded-5"
                        />
                        {product.title}
                      </td>
                      <td>{product.description}</td>
                      <td>{product.date.CreatedAt}</td>
                      <td>{product.price}</td>
                      <td
                        className={
                          product.inStock == "true"
                            ? styles.instock
                            : styles.notinstock
                        }
                      >
                        {product.inStock == "true" ? "in stock" : "coming soon"}
                      </td>
                      <td className="d-flex gap-1 justify-content-between">
                        <Link href={`products/${product.id}`}>
                          <LuEye
                            title="view & update"
                            className={`${styles.icon} ${styles.view}`}
                            size={25}
                          />
                        </Link>
                        <RiDeleteBin2Line
                          onClick={() => {
                            deleteproduct(product);
                          }}
                          title="Delete"
                          className={`${styles.icon} ${styles.delete}`}
                          size={25}
                        />
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    style={{ opacity: ".6", textAlign: "center" }}
                  >
                    there are no products yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          hasNext={
            filteredproducts && indexOfLastproduct >= filteredproducts.length
              ? true
              : false
          }
        />
        {filteredproducts && (
          <div className={styles.pageInfo}>
            <span>total products: {filteredproducts.length}</span>
            <span>page Number: {pageNumbr}</span>
            <span>
              total pages:{" "}
              {Math.ceil(filteredproducts.length / productsPerPage)}
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default products;
