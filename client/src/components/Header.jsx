import React from "react";
import { FaRegLightbulb, FaLightbulb } from "react-icons/fa";
import { GiQuillInk } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
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
          <button onClick={() => dispatch(toggleTheme())}>
            {theme === "light" ? <FaRegLightbulb /> : <FaLightbulb />}
          </button>
          {currentUser ? (
            <>
              <img
                className="rounded-full w-6 h-6"
                src={currentUser.profilePicture}
                alt=""
              />
              <div className="absolute flex flex-col p-4 border top-20 right-5 w-60">
                <span>{currentUser.username}</span>
                <span>{currentUser.email}</span>
                <Link to={"/dashboard?tab=profile"}>profile</Link>
                <span>signOut</span>
              </div>
            </>
          ) : (
            <Link to={"/sign-in"}>로그인</Link>
          )}
        </div>
      </section>
    </header>
  );
}
