// import Image from "next/image";

import Link from "next/link";
import Dashboard from "./dashboard/page"
import styles from "./page.module.css"
import { BiSolidLogInCircle } from "react-icons/bi";

export default function Home() {
  
  return (
    <>
     <div className={styles.home}>
     <div className={styles.content}>
      <h2>welcome to my dashboard</h2>
      <div className={styles.btns}>
        <Link href="/sign-in" className={`${styles.login} submit`}>Login now <span className={styles.loginIcon}><BiSolidLogInCircle size={25}/></span></Link>
        <Link href="/dashboard" className={`${styles.continue} submit`}>continue without login</Link>
      </div>
     </div>
      </div> 
    </>
  );
}
