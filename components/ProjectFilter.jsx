"use client"

import { projects } from "@/constants/projects";
import { useEffect } from "react";

const ProjectFilter = ({setFiltered, activeCategory,  setActiveCategory}) => {
  useEffect(() =>{
    if (activeCategory === 'all') {
      setFiltered(projects);
      return;
    }

    const filtered = projects.filter((project) => project.category?.includes(activeCategory));
    setFiltered(filtered);
  },[activeCategory]);

  return (
    <>
    <div className="flex gap-5 my-10">
      <button className={activeCategory === 'all'? `bg-dark-blue py-1 px-3 text-white rounded-lg`: null}
      onClick={() => setActiveCategory("all")}>All
      </button>
      {/* <button className={activeCategory === 'java'? `bg-dark-blue py-1 px-3 text-white rounded-lg`: null}
      onClick={() => setActiveCategory("java")}>Java Full-Stack 
      </button> */}
      <button className={activeCategory === 'script'? `bg-dark-blue py-1 px-3 text-white rounded-lg`: null}
      onClick={() => setActiveCategory("script")}>Web Developement 
      </button>
      {/* <button className={activeCategory === 'fs'? `bg-dark-blue py-1 px-3 text-white rounded-lg`: null}
      onClick={() => setActiveCategory("fs")}>MERN Full-Stack
      </button> */}
      <button className={activeCategory === 'react'? `bg-dark-blue py-1 px-3 text-white rounded-lg`: null}
      onClick={() => setActiveCategory("react")}>ReactJs
      </button>
      {/* <button className={activeCategory === 'next'? `bg-dark-blue py-1 px-3 text-white rounded-lg`: null}
      onClick={() => setActiveCategory("next")}>NextJs
      </button> */}
      <button className={activeCategory === 'python'? `bg-dark-blue py-1 px-3 text-white rounded-lg`: null}
      onClick={() => setActiveCategory("python")}>Python Full-Stack
      </button>
    </div>
    </>
  )
}

export default ProjectFilter