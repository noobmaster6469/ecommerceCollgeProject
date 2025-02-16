import { Moon, ShoppingCart, Sun, UserRound } from "lucide-react";
import React, { useState } from "react";
import { useThemeStore } from "../store/useThemeStore";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [count, setCount] = useState(0);
  const { theme, setTheme } = useThemeStore();

  const themeHandler = () => {
    setTheme(theme === "dim" ? "cmyk" : "dim");
  };
  return (
    <div className="navbar bg-base-100 fixed z-10 top-0 left-0 shadow md:px-12">
      {/* left side */}
      <div className="flex-1">
        <Link to="/">
          <a className="btn btn-ghost text-xl">Sound Rise</a>
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
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
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
