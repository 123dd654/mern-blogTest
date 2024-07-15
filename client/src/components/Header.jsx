import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaRegLightbulb } from "react-icons/fa";
import { GiQuillInk } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#F9F4E1]">
      <section className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6 border-b-2">
        <div className="flex items-center">
          <GiQuillInk size={24} />
          <h1 className="text-xl font-normal text-blue-950">Coding Diary</h1>
        </div>
        <nav className="flex space-x-4">
          <Link to="/" className="text-blue-950">
            Home
          </Link>
          <Link to="/sign-up" className="text-blue-950">
            Join
          </Link>
          <Link to="/sign-in" className="text-blue-950">
            Login
          </Link>
          <Link to="#" className="text-blue-950">
            Board
          </Link>
          <Link to="#" className="text-blue-950">
            Cate
          </Link>
        </nav>
        <div className="icon flex gap-3">
          <IoSearch size={20} />
          <FaRegLightbulb size={20} />
        </div>
      </section>
    </header>
  );
}
