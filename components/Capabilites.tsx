"use client";

import React from "react";
import Image from "next/image";

export default function Capabilities() {
  const capabilities = [
    {
      title: "Integrated Web Apps",
      description:
        "Sleek, responsive, and user-focused websites to elevate your online presence with content, eCommerce, and SaaS solutions.",
      image: "/web_design.png", // Renamed to 'image' for clarity
    },
    {
      title: "Full-Stack Applications",
      description:
        "Robust, scalable apps built from front to back, including web and mobile solutions with modern frameworks.",
      image: "/full_stack.jpg",
    },
    {
      title: "DevOps",
      description:
        "Streamlined workflows, CI/CD pipelines, and infrastructure automation for enhanced scalability and reliability.",
      image: "/dev_ops.jpg",
    },
    {
      title: "Systems Development",
      description:
        "Custom software solutions to solve complex business challenges with optimized performance and integration.",
      image: "/systems_design.jpg",
    },
    {
      title: "Mobile Applications",
      description:
        "Full fledged mobile apps that work and render cross-platform across both android and ios devices",
      image: "/mobile_apps.jpg",
    },
    {
      title: "Blockchain Solutions",
      description:
        "Innovative AI-driven solutions to optimize business processes, leveraging machine learning, natural language processing, and predictive analytics for smarter decision-making and efficiency.",
      image: "/ai_solutions.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-6 text-blue-900">
          Our Capabilities
        </h2>
        <p className="text-center text-lg mb-18 max-w-2xl mx-auto text-blue-950">
          We&apos;re proud to offer exceptional senior talent and teams across a
          variety of digital disciplines.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="relative bg-white p-8 shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200"
              style={{ borderColor: "#E5E7EB" }}
            >
              <div className="w-full h-64 mb-6 overflow-hidden rounded-t-lg">
                <Image
                  src={cap.image}
                  alt={`${cap.title} Image`}
                  width={400} // Increased width for larger cards
                  height={256} // Increased height to maintain aspect ratio (e.g., 400x256 for 16:9)
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-3xl font-semibold mb-4 text-[#1E3A8A]">
                  {cap.title}
                </h3>
                <p className="text-black text-lg">{cap.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
