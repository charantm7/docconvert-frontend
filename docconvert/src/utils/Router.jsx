import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Router Component

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
  MapPin,
} from "lucide-react";

// Router Component
export const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  return React.Children.map(children, (child) => React.cloneElement(child, { currentPath, navigate }));
};

export const Route = ({ path, component: Component, currentPath, navigate }) => {
  return currentPath === path ? <Component navigate={navigate} /> : null;
};
