import React from "react";
import styles from "./products.module.css";
import Search from "@/app/components/search/page";
import profile from "../../../../public/palestine.jpg";
import { LuEye } from "react-icons/lu";
import { RiDeleteBin2Line } from "react-icons/ri";

import Image from "next/image";
import Pagination from "@/app/components/pagination/page";
import Link from "next/link";
function Products() {
  return (
    <>
      <div className={`${styles.products}`}>
        <Search pageName={"product"} pathname={"products/add"} />
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>title</th>
                <th>Description</th>
                <th>Created At</th>
                <th>price</th>
                <th>in Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image
                    src={profile}
                    width={40}
                    height={40}
                    objectFit="true"
                    className="me-2 rounded-5"
                  />
                  samsung a23
                </td>
                <td>128g 16ram silver,black</td>
                <td>1/1/2010</td>
                <td>7200</td>
                <td>22</td>
                <td className="d-flex gap-1 justify-content-between">
                  <Link href="products/1">
                    <LuEye
                      title="view"
                      className={`${styles.icon} ${styles.view}`}
                      size={25}
                    />
                  </Link>
                  <RiDeleteBin2Line
                    title="Delete"
                    className={`${styles.icon} ${styles.delete}`}
                    size={25}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <Image
                    src={profile}
                    width={40}
                    height={40}
                    objectFit="true"
                    className="me-2 rounded-5"
                  />
                  samsung a23
                </td>
                <td>128g 16ram silver,black</td>
                <td>1/1/2010</td>
                <td>7200</td>
                <td>22</td>
                <td className="d-flex gap-1 justify-content-between">
                  <Link href="products/2">
                    <LuEye
                      title="view"
                      className={`${styles.icon} ${styles.view}`}
                      size={25}
                    />
                  </Link>
                  <RiDeleteBin2Line
                    title="Delete"
                    className={`${styles.icon} ${styles.delete}`}
                    size={25}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </>
  );
}

export default Products;
