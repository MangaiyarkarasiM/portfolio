import React, { useContext } from "react";
import { ThemeContext } from "../theme/themecontext";
import { techsAndTools } from "../utils/constants";
import { motion } from "framer-motion";

const Skills = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={darkMode ? "bg-gray-700" : "bg-white"}>
        <div className="pt-24 container px-10 md:mx-auto min-h-screen">
          <h3
            className={
              darkMode
                ? "text-white font-medium sm:text-lg md:text-xl"
                : "text-indigo-800 font-medium sm:text-lg md:text-xl"
            }
          >
            Technologies and Tools I have worked with
          </h3>
          <div className="mt-10">
            <div className="flex flex-wrap">
                {techsAndTools.map((tat)=>{
                   return <motion.div
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
                    key={tat.name}
                    className="py-2 px-4 bg-gray-100 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 md:w-48 w-40"
                  >
                    <img alt={tat.name} src={tat.link} className="w-12" />
                    <h4 className="text-md ml-4">{tat.name}</h4>
                  </motion.div>
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
