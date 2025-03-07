"use client";

import React from "react";
import Image from "next/image";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Websites",
      description: "Sleek, responsive, and user-focused websites to elevate your online presence with content, eCommerce, and SaaS solutions.",
      bgImage: "/websites-bg.jpg", // Path to background image in public/
    },
    {
      title: "Full-Stack Applications",
      description: "Robust, scalable apps built from front to back, including web and mobile solutions with modern frameworks.",
      bgImage: "/fullstack-bg.jpg",
    },
    {
      title: "DevOps",
      description: "Streamlined workflows, CI/CD pipelines, and infrastructure automation for enhanced scalability and reliability.",
      bgImage: "/devops-bg.jpg",
    },
    {
      title: "Systems Development",
      description: "Custom software solutions to solve complex business challenges with optimized performance and integration.",
      bgImage: "/systems-bg.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-6 text-black">Our Capabilities</h2>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto text-gray-800">
          We’re proud to offer exceptional senior talent and teams across a variety of digital disciplines.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200"
              style={{ borderColor: "#E5E7EB" }}
            >
              <div className="absolute inset-0">
                <Image
                  src={cap.bgImage}
                  alt={`${cap.title} Background`}
                  fill
                  className="object-cover opacity-20"
                  quality={75}
                />
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
                ></div>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 text-[#1E3A8A]">
                  {cap.title}
                </h3>
                <p className="text-black">{cap.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}