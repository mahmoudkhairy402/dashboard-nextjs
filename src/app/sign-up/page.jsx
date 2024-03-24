import { SignUp } from "@clerk/nextjs";
import React from "react";

function signUp() {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
      <SignUp />
    </div>
  );
}

export default signUp;
