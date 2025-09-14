"use client";
import React from "react";


const About = () => {
  return (
    <div>
      <div className="min-h-screen bg-background-50 flex items-center justify-center p-6">
        <div className="max-w-3xl bg-background shadow-lg rounded-2xl p-10">
          <h1 className="text-3xl font-bold text-white-800 mb-4">About Us</h1>
          <p className="text-white-600 leading-relaxed mb-6">
            Welcome to our website! We are passionate developers dedicated to
            building clean, modern, and user-friendly applications. Our mission is
            to deliver solutions that make life easier and more enjoyable.
          </p>

          <h2 className="text-xl font-semibold text-white-700 mb-3">
            What We Do
          </h2>
          <ul className="list-disc list-inside text-white-600 mb-6">
            <li>🌟 Web Development (React, Next.js, Node.js)</li>
            <li>📱 Mobile App Development</li>
            <li>☁️ Cloud Integration & Deployment</li>
            <li>🎨 UI/UX Design</li>
          </ul>

          <h2 className="text-xl font-semibold text-white-700 mb-3">
            Our Vision
          </h2>
          <p className="text-white-600 leading-relaxed">
            We aim to create technology that not only solves problems but also
            inspires people to dream bigger. Our team thrives on creativity,
            innovation, and collaboration.
          </p>
        </div>
      </div>

      {/* Page Content */}
      <div className="pt-20 text-center">
        <h1 className="text-4xl font-bold text-blue-800">
          Welcome to Abhi Coder 🚀
        </h1>
        <p className="mt-2 mb-10 text-blue-600">
          This is your Next.js page with a Responsive Website.
        </p>
      </div>
    </div>
  );
};

export default About;
