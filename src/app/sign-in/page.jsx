import { SignIn } from "@clerk/nextjs";
import React from "react";

function signIn() {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
      <SignIn />
    </div>
  );
}

export default signIn;
