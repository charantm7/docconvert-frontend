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

// Features Section
export default function FeaturesSection() {
  const features = [
    {
      icon: FileText,
      title: "PDF to Word",
      desc: "Convert PDF documents to editable Word files with perfect formatting",
    },
    {
      icon: FileImage,
      title: "PDF to PowerPoint",
      desc: "Transform PDFs into PowerPoint presentations effortlessly",
    },
    { icon: FileCog, title: "Compress PDF", desc: "Reduce PDF file size while maintaining quality" },
    { icon: Plus, title: "Merge PDF", desc: "Combine multiple PDF files into a single document" },
    { icon: Scissors, title: "Split PDF", desc: "Extract pages or split PDF into multiple files" },
    { icon: Lock, title: "Protect PDF", desc: "Add password protection to your PDF documents" },
    { icon: Unlock, title: "Unlock PDF", desc: "Remove password protection from PDF files" },
    { icon: RefreshCw, title: "Rotate PDF", desc: "Rotate PDF pages to the correct orientation" },
    { icon: Minus, title: "Remove Pages", desc: "Delete unwanted pages from your PDF documents" },
    { icon: Download, title: "PDF to Image", desc: "Convert PDF pages to high-quality images" },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need to work with documents</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-linear-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="mb-4 inline-block p-3 bg-indigo-100 rounded-lg group-hover:bg-indigo-600 transition-colors">
                <feature.icon className="h-6 w-6 text-indigo-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
