"use client";
import { links } from "../../app/contants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const pathName = usePathname();
  return (
    <div className="flex items-center justify-between px-[10%] h-24 shadow-xl ">
      <Link href="/" className="font-semibold text-2xl text-main">
        Carent
      </Link>
      <div className="flex gap-6 capitalize">
        {links.map((link, idx) => {
          return (
            <Link
              key={idx}
              className={`font-semibold ${
                pathName === link.path
                  ? "text-main border-b-4  border-b-main "
                  : "text-black hover:text-main duration-200"
              }`}
              href={link.path}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      <div className="">Authentication</div>
    </div>
  );
};

export default Nav;
