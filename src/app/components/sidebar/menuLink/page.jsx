import Link from "next/link";
import React from "react";

function MenuLink({ cat }) {
  return (
    <div>
      <Link href={`/${cat.path}`}>
        <span>{cat.icon}</span>
        <span>{cat.title}</span>
      </Link>
    </div>
  );
}

export default MenuLink;
