"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-screen overflow-hidden relative">
      {/* Background Image with Overlay */}
      <div className="">
        <Image
          src="/blue-bg.jpg" // Replace with your actual background image path in public/
          alt="Gensys Hero Background"
          fill
          priority
          className="object-cover opacity-30" // Decreased opacity for text readability
          quality={100}
        />
        <div className="absolute inset-0 bg-[#1E3A8A] opacity-85"></div> {/* Deep blue shade overlay (#1E3A8A) */}
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto my-8 h-full flex items-center justify-center text-center px-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-7 leading-tight">
            Empowering Technology, Shaping the Future
          </h1>
          <p className="text-lg md:text-md text-white mb-9 leading-relaxed">
            At Gensys, we believe in the transformative power of technology. As a pioneering force in the tech industry, we operate at the intersection of innovation and investment. Our mission is to fuel the next generation of technological breakthroughs by strategically investing in visionary startups and groundbreaking ideas.
          </p>
          <Link
            href="/contact" // Link to contact or services page for the CTA
            className="inline-block bg-white text-[#1E3A8A] hover:bg-blue-500 hover:text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors"
          >
            Build Now
          </Link>
        </div>
      </div>
    </section>
  );
}