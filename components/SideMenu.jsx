"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AiOutlineWhatsApp, AiFillLinkedin, AiFillGithub, AiFillInstagram, } from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import { useMenuStore } from "@/store/useMenuStore";
import { sidebarMenuLinks } from "@/constants";

const SideMenu = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(sidebarMenuLinks[0]);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isOpen, closeMobileMenu } = useMenuStore();

  const handleLinkClick = (link) => {
    closeMobileMenu();
    setActiveLink(link);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // Change text color based on scroll position
    if (scrollPosition > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    const sections = sidebarMenuLinks.map((link) =>
      document.getElementById(link.sectionId)
    );

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section) {
        if (section.offsetTop <= scrollPosition + 100) {
          setActiveLink(sidebarMenuLinks[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const cleanedPathname = pathname.replace(/^#/, "");

    const matchedLink = sidebarMenuLinks.find(
      (link) =>
        cleanedPathname === link.route ||
        (link.route === "/" && cleanedPathname === "")
    );
    if (matchedLink) {
      setActiveLink(matchedLink);
    }
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <aside
      className={`side-menu bg-white border-r border-gray-300 ${
        isOpen ? "max-lg:block" : "max-md:hidden"
      }`}
    >
      <div className="flex flex-col items-center justify-between h-full p-6">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/assets/Rajesh.jpg"
            width={100}
            height={100}
            alt="antonio"
            className="rounded-full shadow-md"
          />
          <p className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}><i>Rajeshkumar</i>.k</p>
        </div>

        <nav className="flex flex-col gap-3 mt-10">
          {sidebarMenuLinks.map((link) => {
            const isActive = activeLink === link;

            return (
              <a
                href={`${link.route}`}
                key={link.label}
                className={`relative flex items-center justify-center rounded-lg px-4 py-2 transition-all duration-300 ${
                  isActive
                    ? "bg-dark-red text-white shadow-lg"
                    : `${isScrolled ? 'text-gray-900' : 'text-gray-900'} hover:bg-red-400`
                }`}
                onClick={() => handleLinkClick(link)}
              >
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="mt-auto text-center">
          <div className="flex justify-center gap-4 mb-4 mt-5">
            <a
              href="https://github.com/RajeshKumark2"
              target="_blank"
              className="text-3xl text-dark-blue hover:text-dark-red transition-all duration-300 transform hover:scale-110"
            >
              <AiFillGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rajeshkumar1907?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="text-3xl text-dark-blue hover:text-dark-red transition-all duration-300 transform hover:scale-110"
            >
              <AiFillLinkedin size={24} />
            </a>
            
            <a
              href="https://www.instagram.com/rajesh.19021/?hl=en"
              className="text-3xl text-dark-blue hover:text-dark-red transition-all duration-300 transform hover:scale-110"
              aria-label="Instagram"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://wa.me/918248190818" // Replace "yourphonenumber" with your actual WhatsApp number in international format (e.g., 919876543210 for India)
              className="text-3xl text-dark-blue hover:text-dark-green transition-all duration-300 transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <AiOutlineWhatsApp />
            </a>
          </div>
          <p className={`text-sm ${isScrolled ? 'text-gray-900' : 'text-gray-600'}`}>
            © 2024 Rajeshkumar. All rights reserved.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
