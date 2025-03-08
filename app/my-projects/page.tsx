"use client"

import ProjectCards from '@/components/ProjectCards'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/background.png)" }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center pb-[30%] md:pb-[5%]"
    >
      <div className="p-5 sm:p-10 w-full h-full flex justify-center overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-4 sm:gap-y-16 w-full max-w-[950px] max-h-[780px] place-items-center mt-24 sm:mt-22">
          {Projects.map((project, index) => (
            <ProjectCards
              key={index}
              title={project.title}
              text={project.text}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;