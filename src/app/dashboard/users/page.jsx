"use client";
import React, { useState, useEffect, useCallback } from "react";
import styles from "./users.module.css";
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
function Users() {
  const [users, setUsers] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const searchParams = useSearchParams();
  const userQuery = searchParams.get("user");
  const pageNumbr = searchParams.get("page") || 1;
  const usersPerPage = 4;
  console.log("🚀 ~ Users ~ pageNumbr:", pageNumbr);
  console.log("🚀 ~ Users ~ userQuery:", userQuery);

  const indexOfLastUser = pageNumbr * usersPerPage;
  console.log("🚀 ~ Users ~ indexOfLastUser:", indexOfLastUser);
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers
    ? filteredUsers.slice(indexOfFirstUser, indexOfLastUser)
    : null;

  const getusers = useCallback(() => {
    axios
      .get(`http://localhost:3030/users`)
      .then((res) => {
        setUsers(res.data);
        console.log("🚀 ~ .then ~ res.data:", res.data);
      })
      .catch((err) => console.log(err));
  });

  const deleteUser = useCallback((user) => {
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
          text: `${user.username} has been deleted.`,
          icon: "success",
        });

        axios
          .delete(`http://localhost:3030/users/${user.id}`)
          .then((res) => {
            getusers();
            console.log("🚀 ~ .then ~ res.data:", res.data);
          })
          .catch((err) => console.log(err));
      }
    });
  });

  useEffect(() => {
    getusers();
  }, []);

  useEffect(() => {
    if (userQuery) {
      const filtered =
        users &&
        users.filter((user) =>
          user.username.toLowerCase().includes(userQuery.toLowerCase())
        );
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(users);
    }
  }, [userQuery, users]);

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
                <th>phone</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userQuery && filteredUsers ? (
                filteredUsers.map((user) => {
                  return (
                    <tr key={user.id} className={`${styles.fadeIn}`}>
                      {" "}
                      <td>
                        <Image
                          src={profile}
                          width={40}
                          height={40}
                          objectFit="true"
                          className="me-2 rounded-5"
                        />
                        {user.username}
                      </td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.isadmin ? "admin" : "client"}</td>
                      <td>{user.activation ? "active" : "not active"}</td>
                      <td className="d-flex gap-1 justify-content-between">
                        <Link href={`users/${user.id}`}>
                          <LuEye
                            title="view & update"
                            className={`${styles.icon} ${styles.view}`}
                            size={25}
                          />
                        </Link>
                        <RiDeleteBin2Line
                          onClick={() => {
                            deleteUser(user);
                          }}
                          title="Delete"
                          className={`${styles.icon} ${styles.delete}`}
                          size={25}
                        />
                      </td>
                    </tr>
                  );
                })
              ) : currentUsers ? (
                currentUsers.map((user) => {
                  return (
                    <tr key={user.id} className={`${styles.fadeIn}`}>
                      {" "}
                      <td>
                        <Image
                          src={profile}
                          width={40}
                          height={40}
                          objectFit="true"
                          className="me-2 rounded-5"
                        />
                        {user.username}
                      </td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.isadmin ? "admin" : "client"}</td>
                      <td>{user.activation ? "active" : "not active"}</td>
                      <td className="d-flex gap-1 justify-content-between">
                        <Link href={`users/${user.id}`}>
                          <LuEye
                            title="view & update"
                            className={`${styles.icon} ${styles.view}`}
                            size={25}
                          />
                        </Link>
                        <RiDeleteBin2Line
                          onClick={() => {
                            deleteUser(user);
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
                    there are no users yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Pagination
          hasNext={
            filteredUsers && indexOfLastUser >= filteredUsers.length
              ? true
              : false
          }
        />
        {filteredUsers && (
          <div className={styles.pageInfo}>
            <span>total users: {filteredUsers.length}</span>
            <span>page Number: {pageNumbr}</span>
            <span>
              total pages: {Math.ceil(filteredUsers.length / usersPerPage)}
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default Users;
