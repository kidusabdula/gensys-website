'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  useEffect(() => {
    // For scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          element.classList.add('animate-visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      title: "Custom Software & Application Development",
      description: "We design and develop cutting-edge software solutions tailored to your business needs. Whether it's a mobile app, enterprise software, or automation tools, our team ensures efficiency, scalability, and seamless user experience.",
      items: [
        "Enterprise & Small Business Software Solutions – Custom software for business operations, automation, and integration.",
        "Mobile & Web Application Development – Scalable and user-friendly mobile and web apps.",
        "AI & Automation Integration – Smart solutions powered by AI, machine learning, and automation."
      ]
    },
    {
      id: 2,
      title: "Website & Web Application Development",
      description: "From corporate websites to complex web applications, we build intuitive, responsive, and high-performing digital platforms that enhance user engagement and drive business growth.",
      items: [
        "E-Commerce Development – Online stores with secure payment gateways.",
        "Custom Web Platforms – Tailored web applications for unique business needs.",
        "Website Optimization & Maintenance – Performance enhancements and ongoing support."
      ]
    },
    {
      id: 3,
      title: "Cloud & Server Infrastructure Solutions",
      description: "We provide robust network and server hosting solutions, ensuring high availability, security, and performance.",
      items: [
        "Cloud Hosting & Deployment – Secure and scalable cloud infrastructure.",
        "Dedicated & Shared Server Hosting – Reliable hosting solutions tailored to your needs.",
        "Network Security & Optimization – Ensuring high-speed, secure, and efficient connectivity."
      ]
    },
    {
      id: 4,
      title: "Data Center Infrastructure & IT Consulting",
      description: "Our experts assist businesses in designing, setting up, and optimizing data centers to ensure maximum efficiency, security, and scalability.",
      items: [
        "Data Center Design & Setup – End-to-end setup and implementation of modern data centers.",
        "IT Infrastructure Optimization – Upgrading and streamlining existing IT environments.",
        "Cybersecurity & Compliance Consulting – Ensuring adherence to industry standards and best practices."
      ]
    },
    {
      id: 5,
      title: "Tech Product Sales & Procurement",
      description: "We supply a wide range of high-quality tech products, from hardware components to software licenses.",
      items: [
        "Hardware & Equipment Sales – Laptops, servers, networking equipment, and more.",
        "Software Licensing & Subscriptions – Authorized reseller for major software brands.",
        "IT Procurement Consulting – Helping businesses choose cost-effective and high-performance solutions."
      ]
    },
    {
      id: 6,
      title: "Technology Consulting & Training",
      description: "Stay ahead of the curve with our specialized consulting and training services.",
      items: [
        "Strategic IT Consulting – Helping businesses align technology with growth goals.",
        "Short-Term Training – Quick skill-boosting sessions on emerging technologies.",
        "Intensive Training – In-depth, hands-on learning programs with."
      ]
    },
    {
      id: 7,
      title: "Startup Advisory & Tech Facilitation",
      description: "For new and emerging tech startups, we offer expert guidance on business strategies, product development, and market positioning.",
      items: [
        "Business Model Development – Assisting in defining a sustainable and scalable business structure.",
        "Tech Product Development Roadmaps – Guiding startups through the product design and launch phases.",
        "Funding & Investor Readiness – Helping startups prepare for funding rounds and investor pitches."
      ]
    },
    {
      id: 8,
      title: "Blockchain Research & Development",
      description: "We explore and develop blockchain-based solutions tailored to various industries.",
      items: [
        "Smart Contracts Development – Secure and automated contract execution solutions.",
        "Decentralized Application (DApp) Development – Blockchain-powered software solutions.",
        "Enterprise Blockchain Consulting – Helping businesses integrate blockchain technology"
      ]
    }
  ];

  return (
    <div className="bg-blue-950 min-h-screen text-white pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Our Services
        </motion.h1>

        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="animate-on-scroll"
            >
              <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950/70 rounded-lg p-8 shadow-xl backdrop-blur-md border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/20 to-blue-900/30 backdrop-blur-xl"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                    {service.id}. {service.title}
                  </h2>
                  <p className="mb-6 text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-300 mr-2">•</span>
                        <span className="text-gray-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .animate-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;