import React, { useContext } from "react";
import { ThemeContext } from "../theme/themecontext";
import { contacts } from "../utils/constants";
import Typical from "react-typical";
import { motion } from "framer-motion";
import image from "../assets/Mangai.jpg";

const Home = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={darkMode ? "bg-gray-700" : "bg-white"}>
        <main className="mx-auto mt-5 max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between md:h-screen">
          <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 50 },
            }}
            src={image}
            alt="Mangai"
            className="mt-10 sm:w-40 sm:h-40 md:w-80 md:h-80 sm:block md:ml-10 rounded-full"
          />
          <div className="mt-10 text-center lg:text-left mb-10 md:mr-10">
            <div className="text-amber-400">
              <div className="mb-5 uppercase">
                Welcome to my portfolio!
              </div>
              <div
                className={
                  darkMode
                    ? "text-white font-bold mb-2 text-2xl sm:text-4xl md:text-5xl"
                    : "text-indigo-800 font-bold mb-2 text-2xl sm:text-4xl md:text-5xl"
                }
              >
                I'm Mangaiyarkarasi
              </div>
              <span
                className={
                  darkMode
                    ? "block text-amber-400 lg:inline sm:text-2xl md:text-4xl"
                    : "block text-amber-400 z-0 lg:inline sm:text-2xl md:text-4xl"
                }
              >
                <Typical
                  steps={[
                    "Full Stack Developer",
                    2000,
                    "Front End Developer",
                    2000,
                  ]}
                  loop={Infinity}
                />
              </span>
            </div>
            <div className="flex mt-5 justify-center lg:justify-start">
              {contacts.map((con) => {
                return (
                  <a
                    key={con.name}
                    className={
                      darkMode
                        ? "mr-5 cursor-pointer hover:scale-125 text-white"
                        : "mr-5 cursor-pointer hover:scale-125 text-indigo-800"
                    }
                    href={con.url}
                    target="_blank"
                  >
                    <i
                      className={`fa ${con.icon} fa-2x`}
                      aria-hidden="true"
                    ></i>
                  </a>
                );
              })}
            </div>
            <div className="mt-8">
              <a
                href="#"
                className={
                  darkMode
                    ? "text-black bg-white py-2 px-10 rounded-md hover:bg-gray-200"
                    : "text-white bg-indigo-800 py-2 px-10 rounded-md hover:bg-indigo-700"
                }
                target="_blank"
              >
                View Resume
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
