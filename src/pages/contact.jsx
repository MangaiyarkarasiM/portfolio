import React, { useContext } from "react";
import { ThemeContext } from "../theme/themecontext";
import { contacts, contactDetails } from "../utils/constants";
import { motion } from "framer-motion";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-700 pb-5 min-h-screen my-auto"
          : "bg-white pb-5 min-h-screen my-auto"
      }
    >
      <div className="pt-24 container px-5 md:px-10 md:mx-auto">
        <h3 className="text-amber-400 sm:text-2xl md:text-3xl font-medium mb-5">
          Contact
        </h3>
        <div className="flex flex-col gap-10 justify-center items-center">
          {contactDetails?.map((cd) => {
            return (
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0, transition: { type: "spring" } }}
              >
                <a href={cd.href} target="_blank">
                  <div className="contact-card flex items-center justify-center p-2 bg-gray-100 w-56 md:w-80 rounded-lg hover:scale-105">
                    <div className="mr-3">
                      <img
                        src={cd.iconSrc}
                        alt={cd.type}
                        className="w-8 h-8"
                      ></img>
                    </div>
                    <div className="text-indigo-800">{cd.data}</div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
