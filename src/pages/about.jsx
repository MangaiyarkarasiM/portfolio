import React, { useContext } from "react";
import { ThemeContext } from "../theme/themecontext";
import { motion } from "framer-motion";

const About = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={darkMode ? "bg-gray-700" : "bg-white"}>
        <div className="pt-24 container px-10 md:mx-auto min-h-screen">
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
            <p
              className={darkMode ? "mt-5 text-white" : "mt-5 text-zinc-500"}
            >
              A Full Stack Developer from Tamil Nadu. I have been learning MERN
              stack web development and developing the responsive web
              applications for the past 7+ months.
              <br />
              <br />
              I am always curious in gaining new knowledge and apply that knowledge in solving the challenging problems.
              <br />
              <br />
              Right now I am going to complete{" "}
              <span className="font-medium text-amber-400">
                Full Stack Development Program{" "}
              </span>
              from GUVI Geeks Network Private Limited, IIT Madras Research Park, Chennai.
            </p>
          </div>
          <h2 className="mt-10 text-amber-400 sm:text-xl md:text-2xl font-medium">
            Education and Experience
          </h2>
          <div className="flex mt-8 pb-5 flex-col md:flex-row justify-center gap-y-10 gap-x-40">
            <div className="flex">
              <motion.div
              initial="hidden"
              whileInView={"visible"}
              variants={{
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                  },
                },
                hidden: { opacity: 1, x: -20 },
              }}
              >
                <div className="text-white mr-5">
                  <i
                    className="fa fa-graduation-cap fa-2x py-3 px-2 border-2 border-white bg-blue-500 rounded-full"
                    aria-hidden="true"
                  ></i>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, x: 20 },
                }}
              >
                <div className={darkMode ? "text-white" : "text-indigo-800"}>
                  <h3>Bachelor of Engineering</h3>
                  <h5>ECE</h5>
                  <div>2014 - 2018</div>
                </div>
              </motion.div>
            </div>
            <div className="flex">
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, x: -20 },
                }}
              >
                <div className="text-white mr-5">
                  <i
                    className="fa fa-briefcase fa-2x p-3 border-2 border-white bg-blue-500 rounded-full"
                    aria-hidden="true"
                  ></i>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, x: 20 },
                }}
              >
                <div className={darkMode ? "text-white" : "text-indigo-800"}>
                  <h3>Software Engineer</h3>
                  <h5>Cognizant, Coimbatore</h5>
                  <div>2018 - Present</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
