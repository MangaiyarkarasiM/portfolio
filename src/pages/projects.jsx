import React, { useContext } from "react";
import { ThemeContext } from "../theme/themecontext";
import { projects } from "../utils/constants";
import Project from "../components/Project";

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={darkMode ? "bg-gray-700 min-h-screen" : "bg-white"}>
        <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 pt-24 pb-12">
          <h2 className="text-4xl font-semibold px-4 md:px-0 text-amber-400">
            Projects I built
          </h2>
          <div className={ darkMode ? "text-white text-center mt-4" : "text-zinc-600 text-center mt-4"}>
            <div className="font-medium text-lg">Credentials:</div>
            <div>User: abcd@gmail.com | Password: user1234</div>
            <div>Admin: admin@gmail.com | Password: admin1234</div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-10">
            {projects.map((proj) => {
              return (
                <div
                  key={proj.name}
                  className="flex justify-between items-stretch flex-wrap"
                >
                  <Project project={proj} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
