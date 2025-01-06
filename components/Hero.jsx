"use client";
import Image from "next/image";
import Link from "next/link";
import "@/app/animations.css";

const Hero = () => {
  return (
    <section className ="hero-container">
      <div className="hero-content-container">
        <div className="max-md:order-2 flex flex-col gap-5 z-40">
        <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5">
            <h4 className="leading-tight animate-fade-in-up">
              Hi, I'm <span className="text-dark-red">Rajeshkumar.k</span>
            </h4>
            <h5 className="text-gray-800 mt-2 animate-fade-in-up animation-delay-200">
              <span className="text-shadow-md">Full-Stack Developer.</span>
            </h5>
            <p className="mt-5 text-lg md:text-xl text-gray-600 animate-fade-in-up animation-delay-400">
              Junior Python Full Stack Developer. Coffee-fueled coder. Pizza-powered problem solver. Embracing new tech with a smile.
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-4 mt-8 animate-fade-in-up animation-delay-600">
            <Link href="#projects">
              <button className="bg-transparent border-2 border-red-600 text-dark-red font-bold px-6 py-3 rounded-md hover:bg-dark-red hover:text-white transition transform hover:-translate-y-1 duration-300 shadow-lg hover:shadow-2xl">
                View Projects
              </button>
            </Link>
            <Link href="#contact">
              <button className="bg-transparent border-2 border-red-600 text-dark-red font-bold px-6 py-3 rounded-md hover:bg-dark-red hover:text-white transition transform hover:-translate-y-1 duration-300 shadow-lg hover:shadow-2xl">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
        <Image src="/assets/Hero.png" width={500} height={500} alt="Rajesh" 
        className="z-10 rounded-full shadow-lg " />
      </div>

      <ul className="bg-squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Hero;