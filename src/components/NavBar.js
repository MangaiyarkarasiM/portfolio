import React, { useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../theme/themecontext";
import Hamburger from "hamburger-react";

const navItems = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Skills",
    route: "/skills",
  },
  {
    label: "Projects",
    route: "/projects",
  },
  // {
  //   label: "Experience",
  //   route: "/experience",
  // },
  {
    label: "Contact",
    route: "/contact",
  },
];

const NavBar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);

  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: 0, transition: { type: "spring" } }}
    >
      <nav
        className={
          darkMode
            ? "bg-gray-800 border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0"
            : "bg-white border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0"
        }
      >
        <div
          // exit={{ y: -10, transition: { type: "spring" } }}
          className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto"
        >
          <div className="flex items-center cursor-pointer">
            <Link
              to="/"
              className={
                darkMode
                  ? "text-lg md:text-2xl font-mono font-medium text-decoration-none whitespace-nowrap text-amber-400 italic"
                  : "text-lg md:text-2xl font-mono font-medium text-decoration-none whitespace-nowrap text-amber-400 italic"
              }
            >
              {`<Mangaiyarkarasi M/>`}
            </Link>
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto ">
            <ul
              className={
                "flex mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium"
              }
            >
              {navItems.map((nl) => (
                <li key={nl.label} className="cursor-pointer">
                  <NavLink
                    to={nl.route}
                    className={
                      darkMode
                        ? "block py-2 px-3 text-white hover:bg-blue-500 hover:text-black rounded-md selected"
                        : "block py-2 px-3 text-indigo-800 hover:bg-blue-500 hover:text-white rounded-md selected"
                    }
                  >
                    {nl.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <i
                  className="fa fa-moon-o w-6 ml-6 cursor-pointer hover:scale-125 block text-white"
                  aria-hidden="true"
                ></i>
              ) : (
                <i
                  className="fa fa-sun-o w-6 ml-6 cursor-pointer hover:scale-125 block text-yellow-500"
                  aria-hidden="true"
                ></i>
              )}
            </div>
          </div>

          <div className="flex md:hidden items-center">
            <div onClick={() => setDarkMode(!darkMode)} className="mr-2">
              {darkMode ? (
                <i
                  className="fa fa-moon-o w-6 ml-6 cursor-pointer hover:scale-125 block text-white"
                  aria-hidden="true"
                ></i>
              ) : (
                <i
                  className="fa fa-sun-o w-6 ml-6 cursor-pointer hover:scale-125 block text-yellow-500"
                  aria-hidden="true"
                ></i>
              )}
            </div>

            <Hamburger
              toggled={toggle}
              size={22}
              duration={0.8}
              distance={"lg"}
              toggle={setToggle}
              color={darkMode ? "#ffffff" : "#000000"}
            />
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { type: "spring" } }}
            exit={{ x: 200, transition: { type: "spring" } }}
            className={
              darkMode
                ? "bg-black py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
                : "bg-white py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
            }
          >
            <ul className="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
              {navItems.map((nl) => (
                <NavLink
                  to={nl.route}
                  className={
                    darkMode
                      ? "hover:bg-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white selected"
                      : "hover:bg-blue-500 text-indigo-800 block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white selected"
                  }
                  onClick={() => setToggle(false)}
                >
                  <li>{nl.label}</li>
                </NavLink>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavBar;
