"use client";
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import BlurFade from "@/components/ui/blur-fade";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { experience, achievements } from "@/data/resume";
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/ui/box-reveal";
import IconCloud from "@/components/ui/icon-cloud";
import ShimmerButton from '@/components/ui/shimmer-button';
import { ProjectsSection } from '@/components/ui/ProjectsSection';
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ArrowUp } from 'lucide-react'; // Add this import for the arrow icon

// Skill cloud
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
  "postgresql",
  "typescript",
  "prisma",
  "redis",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex w-full h-full items-center justify-center overflow-hidden rounded-lg bg-background px-0 py-0 pt-0 mt-0 dark:bg-gray-900">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

// Theme Toggle Component
function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    
    <Button
      onClick={toggleTheme}
      className="fixed top-4 right-4 md:right-4 z-50 bg-gray-200 dark:bg-gray-800 mr-4 md:mr-0 rounded-full w-12 h-12 md:w-auto md:h-auto flex items-center justify-center"
      variant="outline"
    >
      <span className="md:hidden">{isDark ? '☀️' : '🌙'}</span>
      <span className="hidden md:inline">{isDark ? '☀️ Light' : '🌙 Dark'}</span>
    </Button>
    
   
  );
}

// Scroll to Top Button Component
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none",
        "bg-gray-200 text-gray-800 hover:bg-gray-300",
        "dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
      )}
      variant="outline"
    >
      <ArrowUp className="w-6 h-6" />
    </Button>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <ThemeToggle />
      <ScrollToTopButton /> {/* Added scroll to top button */}
      
      <div className="relative flex h-screen w-full flex-col items-start justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl p-5 md:p-20 dark:border-gray-800">
        <BlurFade delay={0.25} inView>
          <p className="z-10 whitespace-pre-wrap text-start text-4xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white ml-8 mb-1">
            VAIBHAV KULKARNI
          </p>
        </BlurFade> 
        
        <BlurFade delay={0.25 * 2} inView>
          <p className="ml-8 text-lg sm:text-xl text-gray-800 dark:text-gray-200">Software Engineer</p>
        </BlurFade>

        <BlurFade delay={0.25 * 2} inView>
          <p className="ml-8 text-base sm:text-lg text-gray-600 dark:text-gray-400">Turning Ideas into Scalable Digital Solutions with Expertise in MERN Stack and iOS Mobile App Development</p>
        </BlurFade>
        
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 dark:[mask-image:radial-gradient(500px_circle_at_center,gray,transparent)]"
          )}
        />
      </div>
      
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white text-center mb-8">
            EXPERIENCE
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experience.map((job, index) => (
              <BoxReveal key={index} boxColor={"#000000"} duration={0.5}>
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{job.jobTitle}</h3>
                  <p className="text-sm mb-1 text-gray-700 dark:text-gray-300">{job.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{job.duration}</p>
                  <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">{job.description}</p>
                  <a href={job.link} target="_blank" rel="noopener noreferrer">
                    <RainbowButton>Explore</RainbowButton>
                  </a>
                </div>
              </BoxReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white text-center mb-8">
          PROJECTS
        </h1>
        <ProjectsSection />
      </section>
    
      <section className="py-12 bg-white dark:bg-gray-900">
        <h1 className="text-4xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white text-center mb-8">
          SKILLS
        </h1>
        <IconCloudDemo />
      </section>
      
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tighter text-black dark:text-white text-center mb-8">
            ACHIEVEMENTS
          </h1>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="w-full md:w-1/3 max-w-[200px]">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{achievement.title}</h3>
                  <div className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    {achievement.points.map((point, idx) => (
                      <p key={idx} className="mb-1">{point}</p>
                    ))}
                  </div>
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-white bg-gray-800 hover:bg-blue-600 dark:bg-gray-600 dark:hover:bg-blue-500 py-2 px-4 rounded-full text-sm"
                  >
                    Check Out
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8 mt-auto dark:bg-gray-950">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
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
      <div className="space-y-4">
        <h4 className="font-semibold text-lg">Profiles</h4>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
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
    <div className="mt-8 text-center">
      {/* Adjusted button container for mobile */}
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 justify-center">
        <a 
          href="/Vaibhav_Software_Engineer_Resume.pdf" 
          download="Vaibhav_Software_Engineer_Resume.pdf" 
          className="inline-block w-full md:w-auto"
        >
          <ShimmerButton>
            <span className="text-sm font-medium text-white lg:text-lg">
              Download SWE Resume
            </span>
          </ShimmerButton>
        </a>
        <a 
          href="/Vaibhav_iOS_Developer_Resume.pdf" 
          download="Vaibhav_iOS_Developer_Resume.pdf" 
          className="inline-block w-full md:w-auto"
        >
          <ShimmerButton>
            <span className="text-sm font-medium text-white lg:text-lg">
              Download iOS Resume
            </span>
          </ShimmerButton>
        </a>
      </div>
    </div>
    <div className="text-center mt-6">
      <p className="text-sm">© {new Date().getFullYear()} Vaibhav Kulkarni. All rights reserved.</p>
    </div>
  </div>
</footer>
    </div>
  );
}