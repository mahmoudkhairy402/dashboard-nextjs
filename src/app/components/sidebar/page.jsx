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

function Sidebar() {
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
        <div className={styles.image}>
          <Image src={palestine} objectFit="coverd" width={70} height={50} />
        </div>
        <div className={styles.userInfo}>
          <div className={styles.name}>Mahmoud Khairy</div>
          <div className={styles.role}>adminstrator</div>
        </div>
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
                        <span className={`${styles.secondTitle}`}>
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
