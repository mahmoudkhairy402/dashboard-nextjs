import React from "react";
import loading from "../../public/Infinity-1s-224px.gif";
import Image from "next/image";
function Loading() {
  return (
    <div
      style={{ width: "100%", height: "80vh" }}
      className="d-flex align-items-center justify-content-center "
    >
      <Image src={loading} width={60} height={60} objectFit="coverd" />
    </div>
  );
}

export default Loading;
