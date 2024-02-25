import React from "react";
import styles from "./card.module.css";
import { RiUserSmileLine } from "react-icons/ri";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <RiUserSmileLine />
      </div>
      <div className={styles.info}>
        <div className={styles.title}>total user</div>
        <div className={styles.usersNum}>1270</div>
        <div className={styles.note}>
          <span>12%</span> more than previous week
        </div>
      </div>
    </div>
  );
}

export default Card;
