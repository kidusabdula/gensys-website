"use client";

import React from "react";

export default function TechStackSection() {
  const techStack = [
    "C#",
    "Rails",
    "Node.js",
    "Java",
    "React",
    ".NET",
    "Python",
    "Android",
    "iOS",
    "Golang",
    "Vue.js",
    "C++",
    "JavaScript",
    "Swift",
    "TypeScript",
    "Next.js",
    "Django",
    "Flutter",
  ];

  // Duplicate the tech stack for seamless looping in the scroll animation
  const duplicatedTechStack = [...techStack, ...techStack, ...techStack];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-black">
          Yes. We cover your tech stack.
        </h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-800">
          Our expert team has experience in almost every programming language.
        </p>
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll whitespace-nowrap">
            {duplicatedTechStack.map((tech, index) => (
              <span
                key={index}
                className="text-3xl md:text-5xl font-semibold text-[#1E3A8A] opacity-20 mx-6"
              >
                {tech}
              </span>
              
            ))}
          </div>
          <div className="flex animate-scroll whitespace-nowrap">
            {duplicatedTechStack.map((tech, index) => (
              <span
                key={index}
                className="text-3xl md:text-5xl font-semibold text-[#1E3A8A] opacity-20 mx-6"
              >
                {tech}
              </span>
              
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}