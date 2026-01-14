import React from "react";
import Link from "next/link";
import items from "./items";
import Item from "./items";

const Navber = () => {
  return (
    <nav className="flex justify-end w-full mb-20 pb-8 border-b-2 border-slate-200 items-end gap-2.5">
      <Link
        href="/"
        className="text-5xl px-4 py-2 mr-auto text-slate-700 font-black font-sans uppercase tracking-widest visited:text-slate-700 border-4 border-slate-700 shadow-lg active:translate-y-0.5 transition-all duration-150 rounded"
      >
        Gallary
      </Link>
      
      {navItem.map((items,i)=> (
        <Item key={i} {...items}/>
      ))}
     
    </nav>
  );
};

const navItem = [
    {label: "Photo", url: "/?category=photo"},
    {label: "Vector", url: "/?category=vector"}
]

export default Navber;
