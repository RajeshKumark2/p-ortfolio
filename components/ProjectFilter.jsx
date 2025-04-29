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
      <button className={activeCategory === 'Mini-Project'? `bg-dark-blue py-1 px-3 text-white rounded-lg`: null}
      onClick={() => setActiveCategory("Mini-Project")}>Mini-Project
      </button>
      <button className={activeCategory === 'Nextjs'? `bg-dark-blue py-1 px-3 text-white rounded-lg`: null}
      onClick={() => setActiveCategory("Nextjs")}>Nextjs
      </button>
      <button className={activeCategory === 'python'? `bg-dark-blue py-1 px-3 text-white rounded-lg`: null}
      onClick={() => setActiveCategory("python")}>Python Full Stack 
      </button>
    </div>
    </>
  )
}
export default ProjectFilter