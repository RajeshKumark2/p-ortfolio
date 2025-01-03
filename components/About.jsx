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
          I’m a dedicated Software Developer with expertise in full-stack development using Python, JavaScript, React, Django, and Flask. 
          I have successfully delivered over 10 high-impact open-source projects, demonstrating strong problem-solving abilities and innovation. 
          My skills include building scalable applications, creating responsive UIs, and managing projects using Agile methodologies. 
          I am certified in Java, Python, Data Science, and web development, which underpins my technical knowledge. 
          Passionate about contributing to a dynamic team, I’m eager to leverage my expertise in a challenging role to drive organizational growth and foster innovation.
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
          20+
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
          1+
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