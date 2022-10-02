import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../utils/constants";
import { ThemeContext } from "../theme/themecontext";

const Project = () => {
  const { darkMode } = useContext(ThemeContext);
  const [project, setProject] = useState({});
  let { name } = useParams();

  useEffect(() => {
    let proj = projects?.filter((p) => p.name === name);
    setProject(proj[0]);
  }, [name]);

  return (
    <>
      <div className={darkMode ? "bg-gray-700 min-h-screen" : "bg-white"}>
        <div className="pt-24 container px-10 md:mx-auto min-h-screen min-w-screen">
          <div className="mb-5">
            <img
              src={project.img}
              alt={project.name}
              className="rounded-lg w-5/6 h-2/3 md:w-3/4 md:h-1/2 mx-auto"
            ></img>
          </div>
          <div
            className={
              darkMode ? "md:ml-10 text-white" : "md:ml-10 text-zinc-500"
            }
          >
            <div className="mb-5 text-center">
              <h4 className="sm:text-2xl md:text-3xl text-amber-400 font-medium mb-5">
                {project.name}
              </h4>
              <p>{project.desc}</p>
            </div>
            <div className="mb-5">
              <h5 className="sm:text-xl md:text-2xl text-amber-400 font-medium mb-5">
                Tech Stack
              </h5>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className="w-24 bg-gray-200 text-indigo-800 text-center rounded-3xl mr-2 p-2"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-wrap gap-x-10">
              <div className="mb-5">
                <h5 className="sm:text-xl md:text-2xl text-amber-400 font-medium mb-5">
                  Demo
                </h5>
                <div className="mb-3 flex flex-wrap gap-x-1">
                  <span
                    className={
                      darkMode
                        ? "font-medium text-blue-500"
                        : "font-medium text-indigo-800"
                    }
                  >
                    App link :
                  </span>
                  <a
                    href={project.url}
                    target="_blank"
                    className="hover:underline"
                  >
                    {project.url}
                  </a>
                </div>
                <div className="font-medium text-amber-400 mb-3">
                  Demo Credentials:
                </div>
                <div className="flex flex-col">
                  {project.demoCred?.map((d) => {
                    return (
                      <div key={d.role} className="mb-3">
                        <div className="capitalize text-amber-400 font-medium">
                          {d.role}:
                        </div>
                        <div className="flex flex-wrap gap-x-2">
                          <div>
                            <span
                              className={
                                darkMode
                                  ? "font-medium text-blue-500"
                                  : "font-medium text-indigo-800"
                              }
                            >
                              User Id -
                            </span>{" "}
                            {d.userId}
                          </div>
                          <div>
                            <span
                              className={
                                darkMode
                                  ? "font-medium text-blue-500"
                                  : "font-medium text-indigo-800"
                              }
                            >
                              Password -
                            </span>{" "}
                            {d.password}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mb-5">
                <h5 className="sm:text-xl md:text-2xl text-amber-400 font-medium mb-5">
                  Source Code
                </h5>
                <div className="mb-3 flex flex-col">
                  <span
                    className={
                      darkMode
                        ? "font-medium text-blue-500"
                        : "font-medium text-indigo-800"
                    }
                  >
                    Frontend:
                  </span>
                  <a
                    href={project.frontEndRepo}
                    target="_blank"
                    className="hover:underline break-all"
                  >
                    {project.frontEndRepo}
                  </a>
                </div>
                <div className="mb-3 flex flex-col">
                  <span
                    className={
                      darkMode
                        ? "font-medium text-blue-500"
                        : "font-medium text-indigo-800"
                    }
                  >
                    Backend:
                  </span>
                  <a
                    href={project.backEndRepo}
                    target="_blank"
                    className="hover:underline break-all"
                  >
                    {project.backEndRepo}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
