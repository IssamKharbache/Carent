"use client";
import { links } from "@/app/data";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const MenuNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-16 flex items-center justify-between px-6">
      <div className="font-semibold text-2xl text-main ">Carent</div>
      {!isOpen ? (
        <HiMenuAlt1
          onClick={() => setIsOpen(true)}
          className="text-main font-semibold w-8 h-8"
        />
      ) : (
        <CgClose
          onClick={() => setIsOpen(false)}
          className="text-main font-semibold w-8 h-8"
        />
      )}

      <div
        className={`flex flex-col items-center justify-center gap-12  text-white absolute left-0 top-16 bg-main h-screen w-screen duration-700 ${
          isOpen ? "ml-0" : "ml-[-100%]"
        }`}
      >
        {links.map((link, idx) => {
          return (
            <div
              key={idx}
              className="text-white capitalize font-semibold text-2xl"
            >
              <Link href={link.path}>{link.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuNav;