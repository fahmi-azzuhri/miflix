import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "../index.css";

function Nav() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [searchKey, setSearchKey] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate(`/search/${searchKey}`);
  };

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="w-6 h-6"
  >
    <path
      fill-rule="evenodd"
      d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
      clip-rule="evenodd"
    />
  </svg>;

  return (
    <nav className="flex items-center justify-between bg-black text-red-600 px-10 py-4">
      <NavLink to={"/"} className="text-5xl font-bold ">
        MIFLIX
      </NavLink>
      <div className="flex items-center space-x-3">
        <div className="px-2 py-2 hover:border-red-500">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-text" : "non-active-text"
            }
            to={"/"}
          >
            Popular
          </NavLink>
        </div>
        <div className="px-2 py-2 hover:border-red-500">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-text" : "non-active-text"
            }
            to={"/toprated"}
          >
            Top Rated
          </NavLink>
        </div>
        <div className="px-2 py-2 hover:border-red-500">
          <NavLink
            className={({ isActive }) =>
              isActive ? "active-text" : "non-active-text"
            }
            to={"/upcoming"}
          >
            Upcoming
          </NavLink>
        </div>
      </div>

      <form
        className="flex items-center justify-center bg-white rounded-[10px] h-[40px]"
        onSubmit={search}
      >
        <input
          type="text"
          className="text-xl bg-transparent text-black border-b-slate-300 focus:outline-none w-2/3"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type="submit">
          <MagnifyingGlassIcon className="ml-2 w-8 h-8 text-black" />
        </button>
      </form>

      {isLoggedIn ? (
        <button
          className="text-black bg-white font-bold py-2 px-4 rounded hover:bg-slate-300"
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </button>
      ) : (
        <>
          <button
            className="text-black bg-white font-bold py-2 px-4 rounded hover:bg-slate-300"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <button
            className="text-white bg-red-600 font-bold py-2 px-4 rounded hover:bg-red-400"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </>
      )}
    </nav>
  );
}

export default Nav;
