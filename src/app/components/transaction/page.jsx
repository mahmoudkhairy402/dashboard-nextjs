import React from "react";
import styles from "./transaction.module.css";
import Image from "next/image";
import profile from "../../../../public/palestine.jpg";
function Transaction() {
  return (
    <>
      <div className={styles.Transaction}>
        <div className={styles.title}>latest transaction</div>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>status</th>
                <th>data</th>
                <th>amount</th>
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
                <td className={`${styles.status} ${styles.done}`}>done</td>
                <td>1/1/2010</td>
                <td>200$</td>
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
                <td className={`${styles.status} ${styles.pending}`}>
                  pending
                </td>
                <td>1/1/2010</td>
                <td>200$</td>
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
                <td className={`${styles.status} ${styles.cancelled}`}>
                  cancelled
                </td>
                <td>1/1/2010</td>
                <td>200$</td>
              </tr>
              <tr>
                <td>
                  <Image
                    src={profile}
                    width={40}
                    height={40}
                    objectFit="coverd"
                    className="me-2 rounded-5"
                  />
                  mahmoud khairy
                </td>
                <td className={`${styles.status} ${styles.cancelled}`}>
                  cancelled
                </td>
                <td>1/1/2010</td>
                <td>200$</td>
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
                <td className={`${styles.status} ${styles.done}`}>done</td>
                <td>1/1/2010</td>
                <td>200$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Transaction;
