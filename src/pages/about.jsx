import React, { useContext } from "react";
import { ThemeContext } from "../theme/themecontext";

const About = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <div className={darkMode ? "bg-gray-700" : "bg-white"}>
        <div className="pt-24 container px-10 md:mx-auto h-screen">
          <div>
          <h3 className="text-amber-400 sm:text-2xl md:text-3xl font-medium">
            About Me
          </h3>
          <h2
            className={
              darkMode
                ? "mt-10 text-white sm:text-xl md:text-2xl"
                : "mt-10 text-indigo-800 sm:text-xl md:text-2xl"
            }
          >
            Hi 👋, I'm Mangaiyarkarasi
          </h2>
          <p className={darkMode ? "mt-5 text-white" : "mt-5 text-indigo-800"}>
            A Full Stack Developer from Tamil Nadu. I have been learning MERN
            stack web development and developing the responsive web applications
            for the past 5+ months.
            <br />
            <br />
            Right now I am going to complete{" "}
            <span className="font-medium text-amber-400">
              Full Stack Development Program from Guvi, Chennai
            </span>
            .
          </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
