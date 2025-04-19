import Image from "next/image";

const Skills = () => {
  return (
    <div>
      <section className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white" id="skills">
      <div className="max-w-[1250px] mx-auto">
        <div className="inline-block">
          <p className="section-title">
            <span className="mb-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor"></path>
              </svg>
            </span>
            Skills
          </p>
        </div>

          <div className="grid md:grid-cols-5 sm:grid-cols-3 gap-8 grid-cols-2 mt-8">
            {[
            
              // //{ src: "/assets/mern1.png", alt: "Java", label: "" },

              { src: "/assets/python.png", alt: "Python", label: "Python" },
              { src: "/assets/dj4.png", alt: "Django", label: "Django" },
              { src: "/assets/java1.png", alt: "Java", label: "Java" },
              { src: "/assets/flask.png", alt: "Flask", label: "Flask" },
              // { src: "/assets/flask.png", alt: "Flask", label: "Flask" },
              { src: "/assets/html.png", alt: "HTML", label: "HTML" },
              { src: "/assets/css1.png", alt: "CSS", label: "CSS" },
              { src: "/assets/js1.png", alt: "JavaScript", label: "JavaScript" },
              { src: "/assets/Bootstrap.png", alt: "Bootstrap", label: "Bootstrap" },
              // { src: "/assets/git-13.png", alt: "Git", label: "Git" },
            
              { src: "/assets/Hi.png", alt: "GitHub", label: "GitHub" },
              { src: "/assets/sql.png", alt: "MySQL", label: "MySQL" },
              // { src: "/assets/spring3.png", alt: "Spring", label: "Spring" },
              { src: "/assets/react.png", alt: "React.js", label: "React.js" },
              // { src: "/assets/re.png", alt: "Redux", label: "Redux" },
              // { src: "/assets/R.png", alt: "MongoDB", label: "MongoDB" },
              // // { src: "/assets/ex.png", alt: "Express.js", label: "Express.js" },
              { src: "/assets/NextJs.png", alt: "NextJs", label: "NextJs" },
              { src: "/assets/doc.png", alt: "Docker", label: "Docker" },
            ].map((skill, index) => (
              <div key={index} className="bg-light-bg p-6 rounded-lg text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image src={skill.src} width={80} height={80} alt={skill.alt} className="mb-4 mx-auto" />
                <span className="text-lg font-medium text-gray-700">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
