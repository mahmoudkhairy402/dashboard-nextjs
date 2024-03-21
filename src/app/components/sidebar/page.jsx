"use client";
import React from "react";
import styles from "./sidebar.module.css";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoIosSettings } from "react-icons/io";
import { TbHelpOctagonFilled } from "react-icons/tb";
import { RiLogoutBoxFill } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { FaTeamspeak } from "react-icons/fa";
import palestine from "../../../../public/palestine.jpg";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

function Sidebar() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    setTheme(localStorage.getItem("modeTheme"));

    theme == "light"
      ? document.body.classList.add("light")
      : document.body.classList.remove("light");
  }, [theme]);

  const sidebarItems = [
    {
      title: "pages",
      itemData: [
        { title: "dashboard", path: "/dashboard", icon: <MdDashboard /> },
        {
          title: "users",
          path: "/dashboard/users",
          icon: <PiUsersThreeFill />,
        },
        {
          title: "products",
          path: "/dashboard/products",
          icon: <MdOutlineProductionQuantityLimits />,
        },
        {
          title: "transaction",
          path: "/dashboard/transactions",
          icon: <GrTransaction />,
        },
      ],
    },
    {
      title: "analystics",
      itemData: [
        {
          title: "revenue",
          path: "/revenue",
          icon: <RiMoneyDollarCircleFill />,
        },
        { title: "reports", path: "/users", icon: <TbReportSearch /> },
        { title: "teams", path: "/products", icon: <FaTeamspeak /> },
      ],
    },
    {
      title: "user",
      itemData: [
        { title: "setting", path: "/setting", icon: <IoIosSettings /> },
        { title: "help", path: "/help", icon: <TbHelpOctagonFilled /> },
        { title: "logout", path: "/logout", icon: <RiLogoutBoxFill /> },
      ],
    },
  ];
  return (
    <div className={styles.sidebar}>
      <div className={styles.user}>
        <UserButton afterSignOutUrl="/" />
        {theme === "dark" ? (
          <button
            className={`${styles.mode} ${styles.dark}`}
            onClick={() => {
              localStorage.setItem("modeTheme", "light");
              setTheme(localStorage.getItem("modeTheme"));
            }}
          >
            <svg
              className="svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-moon-stars"
              viewBox="0 0 16 16"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
            </svg>
          </button>
        ) : (
          <button
            className={`${styles.mode} ${styles.light}`}
            onClick={() => {
              localStorage.setItem("modeTheme", "dark");
              setTheme(localStorage.getItem("modeTheme"));
            }}
          >
            <svg
              className="svg-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-lightning"
              viewBox="0 0 16 16"
            >
              <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z" />
            </svg>
          </button>
        )}
        {/* <div className={styles.image}>
          <Image src={palestine} objectFit="coverd" width={70} height={50} />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.name}>Mahmoud Khairy</div>
          <div className={styles.role}>adminstrator</div>
        </div> */}
      </div>
      <ul className={`${styles.ulParent}`}>
        {sidebarItems.map((ele) => {
          return (
            <li className="">
              <span className={`${styles.title} ms-2`}>{ele.title}</span>
              <ul>
                {ele.itemData.map((cat, index) => {
                  return (
                    <li key={index}>
                      <Link href={cat.path}>
                        <span className={`${styles.icon}`}>{cat.icon}</span>
                        <span
                          className={`${styles.secondTitle} d-sm-none d-md-inline`}
                        >
                          {cat.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
