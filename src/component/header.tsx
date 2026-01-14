"use client";

import React, { useEffect, useState } from "react";
import { SearchIcon } from "./icon";
import { useRouter } from "next/navigation";

const Header = () => {
  const [searchData, setSearchData] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    router.push(searchData ? `/?search=${searchData}` : "/");
  }, [searchData, router]);

  return (
    <div className="flex justify-between items-center gap-2.5 bg-gradient-to-r from-slate-50 to-white p-6 rounded-2xl shadow-xl border border-slate-100">
      {/* Decorative background elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 rounded-2xl"></div>
      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-lg"></div>
      <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-lg"></div> */}

      {/* Search Section */}
      <div className="relative w-full max-w-lg z-10">
        <div className="relative group">
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-3 px-6 pr-12 bg-white border-2 border-slate-200 focus:border-slate-800 focus:outline-none text-slate-700 rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-xl group-focus-within:shadow-2xl placeholder:text-slate-400 backdrop-blur-sm"
            onChange={(e) => setSearchData(e.target.value)}
          />

          {/* Decorative border effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 -z-10 blur-sm transition-opacity duration-300"></div>

          <button
            type="button"
            className="absolute right-2 top-1/2 -translate-y-1/2 
             flex items-center justify-center
             w-10 h-10
             bg-gradient-to-r from-slate-800 to-slate-900
             text-white rounded-lg
             hover:from-slate-700 hover:to-slate-800
             transition-all duration-300
             shadow-md hover:shadow-lg
             hover:scale-105 active:scale-95"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* UPLOAD Button with enhanced styling */}
      <button className="px-10 py-3.5 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 text-white text-base font-bold rounded-xl hover:from-slate-700 hover:via-slate-800 hover:to-slate-700 active:translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden">
        {/* Button glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="relative z-10">UPLOAD</span>
      </button>

      {/* Decorative corner accents */}
      {/* <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-purple-500/50 rounded-tl-xl"></div>
      <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-blue-500/50 rounded-tr-xl"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-pink-500/50 rounded-bl-xl"></div>
      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50 rounded-br-xl"></div> */}
    </div>
  );
};

export default Header;
