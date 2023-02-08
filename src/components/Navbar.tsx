import Link from "next/link";
import React, { useState } from "react";
import { NavItem } from "./NavItem";
import { FaSpaceShuttle } from "react-icons/fa"

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Planets", href: "/planets" },
];
export function Navbar() {
  const [navActive, setNavActive] = useState<boolean | null>(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <nav className="flex items-center px-6 lg:px-12 bg-space-black">
      <Link href={"/"} className="flex gap-x-2 pr-7">
        <p className="font-heading text-space-white">Kepler</p>
        <FaSpaceShuttle className="w-7 h-6 text-space-white"/>
      </Link>
      <div className={`${navActive ? "active" : ""} flex  gap-x-5 py-4`}>
        {MENU_LIST.map((menu, idx) => (
          <div
            onClick={() => {
              setActiveIdx(idx);
              setNavActive(false);
            }}
            key={menu.text}
            className="text-space-white hover:text-rose-500"
          >
            <NavItem active={activeIdx === idx} {...menu} />
          </div>
        ))}
      </div>
    </nav>
  );
}