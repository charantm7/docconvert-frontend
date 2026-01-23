import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

// Navbar Component
export default function Navbar({ currentPath }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
            <FileText className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">DocConvert</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-indigo-600 transition-colors">
              How it Works
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-indigo-600 transition-colors">
              Pricing
            </a>
            <button
              onClick={() => navigate("/auth")}
              className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block text-gray-700 hover:text-indigo-600">
              Features
            </a>
            <a href="#how-it-works" className="block text-gray-700 hover:text-indigo-600">
              How it Works
            </a>
            <a href="#pricing" className="block text-gray-700 hover:text-indigo-600">
              Pricing
            </a>
            <button
              onClick={() => navigate("/auth")}
              className="w-full px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
