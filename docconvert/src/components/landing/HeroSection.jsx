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

// Hero Section
export default function HeroSection({ navigate }) {
  const [floatingIndex, setFloatingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingIndex((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Convert Documents
            <span className="block text-indigo-600">Effortlessly</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transform your documents with professional-grade conversion tools. PDF to Word, PowerPoint to PDF,
            and everything in between.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/auth")}
              className="px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Converting
            </button>
            <button className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-xl hover:bg-indigo-50 transition-all">
              View Demo
            </button>
          </div>
          <div className="flex items-center space-x-8 pt-4">
            <div>
              <div className="text-3xl font-bold text-gray-900">500K+</div>
              <div className="text-sm text-gray-600">Documents Converted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-600">Happy Users</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full h-96">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`absolute inset-0 bg-white rounded-2xl shadow-2xl p-8 transition-all duration-700 ${
                  floatingIndex === index
                    ? "opacity-100 transform translate-y-0"
                    : "opacity-0 transform translate-y-8"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <FileText className="h-12 w-12 text-indigo-600" />
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
                <div className="mt-8 flex justify-center">
                  <RefreshCw className="h-8 w-8 text-indigo-600 animate-spin" />
                </div>
                <div className="mt-8 text-center text-gray-600 font-medium">
                  {index === 0 && "Converting PDF to Word..."}
                  {index === 1 && "Compressing PDF..."}
                  {index === 2 && "Merging Documents..."}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
