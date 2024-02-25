import React from "react";
import styles from "./login.module.css";
function Login() {
  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.login}>
          <h2>Login</h2>
          <form className={styles.form}>
            <input
              className=""
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />

            <input
              className=""
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />

            <input
              className="col-12"
              type="submit"
              name="submit"
              id="submit"
              placeholder="login"
            />
            <div className={styles.message}>:message</div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
