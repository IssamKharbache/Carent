"use client";
import { links } from "../../app/contants/data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const MenuNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [isOpen]);
  return (
    <div className="h-16  flex items-center   justify-between px-6">
      <Link href="/" className="font-semibold text-2xl text-main ">
        Carent
      </Link>
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
        className={`flex z-10 flex-col items-center justify-center gap-12  text-white absolute left-0 top-16 bg-main h-screen w-screen duration-700 ${
          isOpen ? "ml-0" : "ml-[-100%]"
        }`}
      >
        {links.map((link, idx) => {
          return (
            <div
              key={idx}
              className="text-white capitalize font-semibold text-2xl"
            >
              <Link onClick={() => setIsOpen(false)} href={link.path}>
                {link.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuNav;
