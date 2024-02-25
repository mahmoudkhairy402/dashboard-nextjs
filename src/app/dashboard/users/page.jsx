import React from "react";
import styles from "./users.module.css";
import Search from "@/app/components/search/page";
import profile from "../../../../public/palestine.jpg";
import { LuEye } from "react-icons/lu";
import { RiDeleteBin2Line } from "react-icons/ri";

import Image from "next/image";
import Pagination from "@/app/components/pagination/page";
import Link from "next/link";
function Users() {
  return (
    <>
      <div className={`${styles.users}`}>
        <Search pageName={"user"} pathname={"users/add"} />
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>Email</th>
                <th>Created At</th>
                <th>Role</th>
                <th>Action</th>
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
                  mahmoud khairy
                </td>
                <td>mahmoudkhairy402@gmail.com</td>
                <td>1/1/2010</td>
                <td>client</td>
                <td>active</td>
                <td className="d-flex gap-1 justify-content-between">
                  <Link href="users/1">
                    <LuEye
                      title="view & update"
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
                  mahmoud khairy
                </td>
                <td>mahmoudkhairy402@gmail.com</td>
                <td>1/1/2010</td>
                <td>client</td>
                <td>active</td>
                <td className="d-flex gap-1 justify-content-between">
                  <LuEye
                    title="view"
                    className={`${styles.icon} ${styles.view}`}
                    size={25}
                  />
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
                  mahmoud khairy
                </td>
                <td>mahmoudkhairy402@gmail.com</td>
                <td>1/1/2010</td>
                <td>client</td>
                <td>active</td>
                <td className="d-flex gap-1 justify-content-between">
                  <LuEye
                    title="view"
                    className={`${styles.icon} ${styles.view}`}
                    size={25}
                  />
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
                  mahmoud khairy
                </td>
                <td>mahmoudkhairy402@gmail.com</td>
                <td>1/1/2010</td>
                <td>client</td>
                <td>active</td>
                <td className="d-flex gap-1 justify-content-between">
                  <LuEye
                    title="view"
                    className={`${styles.icon} ${styles.view}`}
                    size={25}
                  />
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

export default Users;
