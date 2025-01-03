const About = () => {
  return (
    <section className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white" id="about">
      <div className="max-w-[1250px] mx-auto">
        <div className="inline-block">
          <p className="section-title">
            <span className="mb-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor"></path>
              </svg>
            </span>
            About Me
          </p>
        </div>
        <div className="mt-7">
          <p className="mt-6 text-gray-600 text-[20px] leadiing-10">    
          Hi, I'm Rajeshkumar K, a dedicated Junior Python Full Stack Developer with a strong passion 
          for creating modern and scalable web applications. I have expertise in both front-end and back-end 
          development, allowing me to design and build dynamic, user-friendly websites that adhere to industry standards. 
          With a solid foundation in front-end technologies like HTML, CSS, JavaScript, React.js, and Bootstrap, 
          I focus on crafting responsive and intuitive designs to ensure a seamless user experience. On the back-end, 
          my proficiency in Python, along with frameworks like Django and Flask, enables me to develop robust and efficient 
          systems that are both secure and scalable. I am driven by a commitment to innovation and problem-solving, 
          eager to collaborate with dynamic teams, and ready to contribute my skills to projects that drive 
          organizational success and growth.
          </p>
        </div>
      </div>
      <div className="mt-10">
      <div className="w-full">
  <ul className="flex flex-col gap-6 md:flex-row md:gap-10">
    <li className="w-full">
      <div className="relative w-full text-center py-8 md:py-14 rounded-md bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:bg-gray-100">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-100 to-gray-200 opacity-20 rounded-md"></div>
        <h3 className="text-4xl md:text-5xl mb-3 font-extrabold text-dark-red transition-colors duration-500">
          10+
        </h3>
        <span className="uppercase text-gray-700 font-semibold transition-colors duration-500">
          Projects Completed
        </span>
      </div>
    </li>
    <li className="w-full">
      <div className="relative w-full text-center py-8 md:py-14 rounded-md bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:bg-gray-100">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-100 to-gray-200 opacity-20 rounded-md"></div>
        <h3 className="text-4xl md:text-5xl mb-3 font-extrabold text-dark-red transition-colors duration-500">
          Fresher
        </h3>
        <span className="uppercase text-gray-700 font-semibold transition-colors duration-500">
          Years of Experience
        </span>
      </div>
    </li>
  </ul>
</div>
</div>
    </section>
  );
};

export default About;