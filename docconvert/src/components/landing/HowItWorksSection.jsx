import React, { useState, useEffect } from "react";
import {
  FileText,
  Lock,
  Unlock,
  RefreshCw,
  Download,
  Upload,
  Scissors,
  Plus,
  Minus,
  FileImage,
  FileCog,
  Menu,
  X,
  Github,
  Mail,
} from "lucide-react";
// How It Works Section
export default function HowItWorksSection() {
  const steps = [
    { icon: Upload, title: "Upload", desc: "Drag and drop or select your file" },
    { icon: RefreshCw, title: "Convert", desc: "Our system processes your document instantly" },
    { icon: Download, title: "Download", desc: "Get your converted file immediately" },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-linear-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple, fast, and secure</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
