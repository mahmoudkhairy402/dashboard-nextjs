import React from "react";
import Card from "../components/card/page";
import styles from "./dashboard.module.css";
import { ImFire } from "react-icons/im";
import { FaSpaceAwesome } from "react-icons/fa6";
import Transaction from "../components/transaction/page";
import Chart from "../components/chart/page";

function Dashboard() {
  return (
    <div className="d-flex justify-content-between w-100 gap-2">
      <div
        className={`${styles.content} col-9 d-flex flex-column justify-content-between gap-2`}
      >
        <div
          className="cards d-flex justify-content-between align-items-start w-100"
          style={{ maxHeight: "20%" }}
        >
          <Card className="col-3" />
          <Card className="col-3" />
          <Card className="col-3" />
        </div>
        <div className="transactions">
          <Transaction />
        </div>
        <div className="chart">
          <Chart />
        </div>
      </div>
      <div className={`${styles.aside}  col-3`}>
        <div className={`${styles.latestcard}`}>
          <div className={styles.title}>
            <ImFire size={15} color="yellowgreen" className="me-1" /> Available
            now
          </div>
          <div className={styles.helpsentence}>
            how to use the new version of the admin dashboard
          </div>
          <div className={styles.secondhelp}>
            how to use the new version of the admin dashboard
          </div>
          <button className="btn btn-outline-secondary rounded-1">
            <FaSpaceAwesome size={15} color="yellowgreen" className="me-1" />{" "}
            watch now
          </button>
        </div>
        <div className={`${styles.latestcard}`}>
          <div className={styles.title}>
            <ImFire size={15} color="yellowgreen" className="me-1" /> Available
            now
          </div>
          <div className={styles.helpsentence}>
            how to use the new version of the admin dashboard
          </div>
          <div className={styles.secondhelp}>
            how to use the new version of the admin dashboard
          </div>
          <button className="btn btn-outline-secondary rounded-1">
            <FaSpaceAwesome size={15} color="yellowgreen" className="me-1" />{" "}
            watch now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
