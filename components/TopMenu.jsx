"use client"
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { RiMenu3Fill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { useState } from 'react';
import jsPDF from 'jspdf';

const TopMenu = () => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Assuming isOpen is used for menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const downloadCV = () => {
    setLoading(true);

    fetch('/assets/Rajesh.pdf') // Replace 'ganesh.pdf' with the actual filename
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Rajesh.pdf'); // Change the downloaded file name if needed
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error downloading PDF:', error);
        setLoading(false);
      });
  };

  return (
    <div className="px-[40px] bg-light-bg py-4 z-10 max-xs:px-[20px]" id="home">
      <div className="top-menu">
        <div className="flex justify-between items-center w-full md:hidden">
          <div className="flex gap-10 w-full">
            <Link href={'/'}>
              <h1 className="font-bold text-3xl text-dark-red">Rajesh</h1>
            </Link>
          </div>

          <div className="text-2xl z-50" onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose /> : <RiMenu3Fill />}
          </div>
        </div>

        <div className="top-menu-info-container">
          <div className="flex md:gap-10 flex-col md:flex-row">
            <div className="flex gap-1 items-center text-sm font-bold">
              <MdEmail />
              <span className="text-dark-blue">rajeshraj8558@gmail.com</span>
            </div>
          </div>

          <button
            className="bg-dark-blue text-white px-4 py-1 rounded-md hover:bg-dark-blue/75"
            onClick={downloadCV} disabled={loading}
          >
            {loading ? 'Downloading...' : 'Download CV'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
