import { Moon, ShoppingCart, Sun, UserRound } from "lucide-react";
import React, { useState } from "react";
import { useThemeStore } from "../store/useThemeStore.js";
import { Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore.js";

const Navbar = () => {
  const [count, setCount] = useState(0);
  const { theme, setTheme } = useThemeStore();
  const { logout, authUser } = useAuthStore();
  const themeHandler = () => {
    setTheme(theme === "dim" ? "cmyk" : "dim");
  };
  return (
    <div className="navbar bg-base-100 fixed z-10 top-0 left-0 shadow md:px-12">
      {/* left side */}
      <div className="flex-1">
        <Link to="/">
          <span className="btn btn-ghost text-xl">Sound Rise</span>
        </Link>
      </div>

      {/* right side */}
      <div className="flex-none">
        {/* user */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <UserRound />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {authUser?.isAdmin && (
              <li>
                <button className="justify-between">
                  <Link to="/admin">Admin Panel</Link>
                </button>
              </li>
            )}
            <li onClick={logout}>
              <button>Logout</button>
            </li>
          </ul>
        </div>

        {/* theme toggle */}
        <div className="dropdown">
          <div role="button" className="btn btn-ghost btn-circle">
            <div className="indicator" onClick={() => themeHandler()}>
              {theme === "dim" ? <Moon /> : <Sun />}
            </div>
          </div>
        </div>

        {/* cart */}
        <div className="dropdown">
          <div role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <ShoppingCart />
              <span className="badge badge-sm indicator-item">{count}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
