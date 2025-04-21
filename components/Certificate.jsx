// app/components/Certificate.jsx
import React from 'react'
import Image from "next/image";


const Certificate = () => {
  const certificate = [
    {
      title: 'Web Based Technologies and Multimedia Applications',
      issuer: 'Swayam',
      image: '/web.jpg',
      link: 'https://swayam.gov.in/'
    },
    {
      title: 'Introduction to Cyber Security',
      issuer: 'Swayam',
      image: '/Cyber.jpg',
      link: 'https://swayam.gov.in/'
    },
    {
        title: 'Full Stack Software Developer Assessment',
        issuer: 'IBM',
        image: '/full.jpg',
        link: 'https://www.coursera.org/account/accomplishments/verify/IIRAJ7CSHR6D'
      },
      {
        title: 'Programming in Python',
        issuer: 'Meta',
        image: '/python.jpg',
        link: 'https://www.coursera.org/account/accomplishments/verify/O1J0PV2LYP8A'
      },
    {
      title: 'Crash Course on Python',
      issuer: 'Google',
      image: '/carsh.jpg',
      link: 'https://www.coursera.org/account/accomplishments/verify/9ILOKT26G8K8'
    }
  ]

  return (
    <section className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white" id="certificate">
      <div className="max-w-[1250px] mx-auto">
        <div className="inline-block mb-6">
          <p className="section-title flex items-center gap-2 text-lg font-semibold">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0 L16 8 L8 16 L0 8 L8 0Z" fill="currentColor" />
            </svg>
            Certificates
          </p>
        </div>

        <div className="grid md:grid-cols-2 sm:grid-cols-3 gap-8 grid-cols-1 mt-8">
          {certificate.map((cert, index) => (
            <div key={index} className="bg-light-bg p-6 rounded-lg text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src={cert.image}
                alt={cert.title}
                className="mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">{cert.title}</h3>
              <p className="text-sm text-gray-500">{cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-2 block"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificate
