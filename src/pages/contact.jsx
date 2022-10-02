import React, { useContext } from "react";
import { ThemeContext } from "../theme/themecontext";
import { contacts, contactDetails } from "../utils/constants";
import { motion } from "framer-motion";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
      <div className={darkMode ? "bg-gray-700 pb-5 min-h-screen" : "bg-white pb-5"}>
        <div className="pt-24 container px-5 md:px-10 md:mx-auto">
          <div className="flex flex-wrap gap-10 pb-10 justify-center">
            {contactDetails?.map((cd) => {
              return (
                <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0, transition: { type: "spring" } }}
                >
                  <a href={cd.href} target="_blank">
                    <div className="contact-card flex flex-col items-center justify-center bg-gray-100 w-56 sm:h-60 md:w-80 md:w-80 rounded-lg hover:scale-105">
                      <div className="mb-3">
                        <img
                          src={cd.iconSrc}
                          alt={cd.type}
                          className=" w-24 h-24"
                        ></img>
                      </div>
                      <div className="mb-3 text-zinc-500">{cd.type}</div>
                      <div className=" text-indigo-800">{cd.data}</div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
          <div className="text-right" >
            <div className={ darkMode ? "text-2xl text-amber-400 font-bold" : "text-2xl text-indigo-800 font-bold"}>Lets catch up!</div>
            <div className="flex mt-5 justify-end">
              {contacts?.map((con) => {
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
                      className={`fa ${con.icon} fa-3x`}
                      aria-hidden="true"
                    ></i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;
