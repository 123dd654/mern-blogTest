import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { GiQuillInk } from "react-icons/gi";

export default function Header() {
  return (
    <header className="bg-[#F9F4E1]">
      <section className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 border-b-2">
        <div className="flex items-center">
          <GiQuillInk size={24} />
          <h1 className="text-xl font-normal text-blue-950">Coding Diary</h1>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="text-blue-950">
            Home
          </a>
          <a href="#" className="text-blue-950">
            Join
          </a>
          <a href="#" className="text-blue-950">
            Login
          </a>
          <a href="#" className="text-blue-950">
            Board
          </a>
          <a href="#" className="text-blue-950">
            Cate
          </a>
        </nav>
        <div className="icon flex gap-3">
          <IoSearch size={20} />
          <FaRegLightbulb size={20} />
        </div>
      </section>
    </header>
  );
}
