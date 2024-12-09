"use client";
import React from 'react';
import { cn } from "@/lib/utils"; // Import your utility function
import BlurFade from "@/components/ui/blur-fade"; // Import BlurFade component
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern"; // Import AnimatedGridPattern
import { projects, experience, achievements } from "@/data/resume"; // Import projects from projects.js
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import IconCloud from "@/components/ui/icon-cloud";
import ShimmerButton from '@/components/ui/shimmer-button';


{/* skill cloud */}

const slugs = [
  "python",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "swift",
  "xcode",
  "mongodb",
  "mysql",
  "postman",
  "ubuntu",
  "amazonaws",
  "tailwindcss",
  "postgresql"
];

export function IconCloudDemo() {
  return (
    <div className="relative flex w-full h-full items-center justify-center overflow-hidden rounded-lg bg-background px-0 py-0 pt-0 mt-0">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}



// Main page

export default function Home() {
  return (
    <div>
      <div className="relative flex h-[100vh] w-full flex-col items-start justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl p-5 md:p-20">
        
        {/* Applying BlurFade effect to the first <p> */}
        <BlurFade delay={0.25} inView>
          <p className="z-10 whitespace-pre-wrap text-start text-4xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white ml-8 mb-1">
            VAIBHAV KULKARNI
          </p>
        </BlurFade> 
        
        {/* Applying BlurFade effect to the second <p> */}
        <BlurFade delay={0.25 * 2} inView>
          <p className="ml-8 text-lg sm:text-xl">Software Engineer</p>
        </BlurFade>

        <BlurFade delay={0.25 * 2} inView>
          <p className="ml-8 text-base sm:text-lg">Turning Ideas into Scalable Digital Solutions with Expertise in MERN Stack and iOS Mobile App Development</p>
        </BlurFade>
        
        {/* Replacing GridPattern with AnimatedGridPattern */}
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>

      {/* Displaying Projects */}
      <hr className="border-t-4 border-gray-300 dark:border-gray-700 h-[300%] mb-2" />
      <h1 className="z-10 whitespace-pre-wrap text-start text-4xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white ml-8 mb-1">
        PROJECTS
      </h1>
      <hr className="border-t-4 border-gray-300 dark:border-gray-700 h-[300%] mb-2" />
            
      <div className="p-5 md:p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 h-auto sm:h-[90vh] lg:h-[100vh]">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg h-[auto]">
            <h3 className="font-bold text-lg sm:text-xl mb-2">{project.name}</h3>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">{project.description}</p>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white bg-gray-800 hover:bg-blue-600 py-2 px-4 rounded-full text-sm sm:text-base"
            >
              GitHub Repository
            </a>
          </div>
        ))}
      </div>

      {/* Displaying Work*/}
      <div className="p-5 md:p-10 pt-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 h-auto sm:h-[75vh]">
        <div className="size-full max-w-lg items-center justify-center overflow-hidden pt-0 lg:h-[100vh]">
          <BoxReveal boxColor={"#000000"} duration={0.5}>
          <p className="z-10 whitespace-pre-wrap text-start text-4xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white mb-1">
              EXPERIENCE<span className="text-[#5046e6]">.</span>
          </p>
          </BoxReveal>

          {/* Render experience dynamically */}
          {experience.map((job, index) => (
            <BoxReveal key={index} boxColor={"#000000"} duration={0.5}>
              <div className="mt-6">
                <h3 className="text-lg sm:text-xl font-semibold">{job.jobTitle}</h3>
                <p className="text-sm">{job.company}</p>
                <p className="text-sm text-gray-500">{job.duration}</p>
                <p className="mt-2 text-sm sm:text-base">{job.description}</p>
              </div>
            </BoxReveal>
          ))}

          {/* Dynamically render the Explore button with link */}
          {experience.map((job, index) => (
            <BoxReveal key={index} boxColor={"#000000"} duration={0.5}>
              <a href={job.link} target="_blank" rel="noopener noreferrer">
                <Button className="mt-[1.6rem] bg-[#000000] text-sm sm:text-base">Explore</Button>
              </a>
            </BoxReveal>
          ))}
        </div>
      </div>
    
      {/* Displaying Skills*/}
      <hr className="border-t-4 border-gray-300 dark:border-gray-700 h-[300%] mb-2 mt-2" />
      <h1 className="z-10 whitespace-pre-wrap text-start text-4xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white ml-8 mb-1">
        SKILLS
      </h1>
      <hr className="border-t-4 border-gray-300 dark:border-gray-700 h-[300%] mb-2" />
      <div>
        <IconCloudDemo />
      </div>
      
      {/*Achievements */}
      <hr className="border-t-4 border-gray-300 dark:border-gray-700 h-[300%] mb-2 mt-2" />
      <h1 className="z-10 whitespace-pre-wrap text-start text-4xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white ml-8 mb-1">
        ACHIEVEMENTS
      </h1>
      <hr className="border-t-4 border-gray-300 dark:border-gray-700 h-[300%] mb-2" />
    
          
<div className="space-y-8 h-[59vh]">
  {achievements.map((achievement, index) => (
    <div key={index} className="flex items-start space-x-4 ml-8 mt-8">
      <div className="w-[5cm] h-[5cm]">
      <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full sm:w-4/5 sm:mx-auto sm:block object-cover sm:object-contain"
      />
      </div>
      <div className="flex flex-col justify-between ml-4">
        <h3 className="text-lg sm:text-xl font-semibold">{achievement.title}</h3>
        <div className="mt-2 text-sm sm:text-base text-gray-700">
          {achievement.points.map((point, idx) => (
            <p key={idx} className="mb-1">{point}</p>
          ))}
        </div>
        <a
          href={achievement.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gray-800 hover:bg-blue-600 py-2 px-4 rounded-full text-sm sm:text-base w-[110px]"
        >
          Check Out
        </a>
      </div>
    </div>
  ))}
    </div>

      {/* Footer */}
      
      <footer className="bg-black text-white py-8 flex flex-col justify-between h-[65vh]">
  <div className="max-w-screen-lg mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:gap-8">
    
    {/* Contact Information */}
    <div className="space-y-4">
      <h4 className="font-semibold text-lg">Contact</h4>
      <p>
        Email:
        <a 
          href="mailto:vaibhav.kulkarni0359@gmail.com" 
          className="text-blue-500 underline ml-1"
        >
          vaibhav.kulkarni0359@gmail.com
        </a>
      </p>
      <p>Phone: +91 95050 40359</p>
    </div>

    {/* Links Section */}
    <div className="space-y-4 md:ml-[200px]">
      <h4 className="font-semibold text-lg">Profiles</h4>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
        <a href="https://www.linkedin.com/in/vaibhav-kulkarni-7230051ab/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          LinkedIn
        </a>
        <a href="https://leetcode.com/u/user7623xD/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          LeetCode
        </a>
        <a href="https://github.com/ivaibhavkulkarni" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          GitHub
        </a>
      </div>
    </div>
  </div>

  {/*Download Button*/}
  <div className="z-10 flex items-center justify-center mt-6">
  <a 
    href="/resume.pdf" 
    download="VAIBHAV_RESUME.pdf" 
    className="shadow-2xl"
  >
    <ShimmerButton className="shadow-2xl">
      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
        Download Resume
      </span>
    </ShimmerButton>
  </a>
</div>


  {/* Copyright Section */}
  <div className="text-center mt-6">
    <p className="text-sm">© {new Date().getFullYear()} Vaibhav Kulkarni. All rights reserved.</p>
  </div>
</footer>


    </div>
  );
}
