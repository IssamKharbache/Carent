"use client";
import { links } from "@/app/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const pathName = usePathname();
  return (
    <div className="flex items-center justify-between px-[10%] h-16 shadow-xl ">
      <div className="font-semibold text-2xl text-main">Carent</div>
      <div className="flex gap-6 capitalize">
        {links.map((link, idx) => {
          return (
            <Link
              key={idx}
              className={`font-semibold ${
                pathName === link.path
                  ? "text-main border-b-2  border-b-main "
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
