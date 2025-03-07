"use client";

import React from "react";
import Image from "next/image";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Integrated Web Apps",
      description: "Sleek, responsive, and user-focused websites to elevate your online presence with content, eCommerce, and SaaS solutions.",
      image: "/web_design.png", // Renamed to 'image' for clarity
    },
    {
      title: "Full-Stack Applications",
      description: "Robust, scalable apps built from front to back, including web and mobile solutions with modern frameworks.",
      image: "/full_stack.jpg",
    },
    {
      title: "DevOps",
      description: "Streamlined workflows, CI/CD pipelines, and infrastructure automation for enhanced scalability and reliability.",
      image: "/dev_ops.jpg",
    },
    {
      title: "Systems Development",
      description: "Custom software solutions to solve complex business challenges with optimized performance and integration.",
      image: "/systems-design.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-6 text-black">Our Capabilities</h2>
        <p className="text-center text-lg mb-18 max-w-2xl mx-auto text-gray-800">
          We’re proud to offer exceptional senior talent and teams across a variety of digital disciplines.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200"
              style={{ borderColor: "#E5E7EB" }}
            >
              <div className="w-full h-48 mb-4 overflow-hidden rounded-t-lg">
                <Image
                  src={cap.image}
                  alt={`${cap.title} Image`}
                  width={300} // Adjust width based on your design
                  height={192} // Maintain aspect ratio (e.g., 300x192 for 16:9)
                  className="object-cover w-full h-full"
                />
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