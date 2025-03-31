"use client";

import React from "react";
import Link from "next/link";

export default function GetStartedSection() {
  const offerings = [
    {
      title: "Staff Augmentation",
      description:
        "Add senior engineers to your team seamlessly for less than the cost of the current market. We staff individuals as well as teams of 50+ people, plus project managers, DevOps, QA, and designers.",
      icon: "🌐", // Placeholder; replace with actual icon component or SVG
    },
    {
      title: "Prominent Product Studio",
      description:
        "Build a high-quality, user-centric product or feature from scratch, fast and on budget. We staff embedded product teams with PMs, UX/UI designers, frontend, backend, data engineers, and QA.",
      icon: "💻", // Placeholder; replace with actual icon component or SVG
    },
    {
      title: "Project Sprints",
      description:
        "Audit data, code or UX/UI. Train and optimize an AI/ML model. Scope a migration or upgrade. Build a proof of concept or design a prototype. We offer many short-term, shovel-ready projects.",
      icon: "⚙️", // Placeholder; replace with actual icon component or SVG
    },
  ];

  return (
    <section className="py-16 bg-blue-950 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Get Started in as Little as Two Weeks
        </h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          We provide a free and guaranteed estimate for cost and timeline with
          every engagement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className="bg-[#2D4A8F] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{offering.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{offering.title}</h3>
              <p className="text-gray-300">{offering.description}</p>
            </div>
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-8 inline-block bg-[#2D4A8F]  text-[#1E3A8A] font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <p className="text-white">Get in Touch</p>
        </Link>
      </div>
    </section>
  );
}
