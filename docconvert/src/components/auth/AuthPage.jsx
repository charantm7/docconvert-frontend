import React, { useState, useEffect } from "react";
import { FileText, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    dob: "",
  });

  const navigate = useNavigate();

  const [floatingShapes, setFloatingShapes] = useState([]);

  useEffect(() => {
    const shapes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
    setFloatingShapes(shapes);
  }, []);

  const handleSubmit = () => {
    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.password ||
        !formData.dob
      ) {
        alert("Please fill in all fields");
        return;
      }
    } else {
      if (!formData.email || !formData.password) {
        alert("Please fill in all fields");
        return;
      }
    }

    console.log("Form submitted:", formData);
  };

  const handleOAuth = (provider) => {
    console.log(`OAuth with ${provider}`);
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      dob: "",
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingShapes.map((shape) => (
          <div
            key={shape.id}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20"
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              background: `linear-gradient(135deg, ${
                shape.id % 3 === 0 ? "#6366f1" : shape.id % 3 === 1 ? "#8b5cf6" : "#ec4899"
              }, transparent)`,
              animation: `float ${shape.duration}s ease-in-out infinite`,
              animationDelay: `${shape.delay}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        @keyframes slideIn {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>

      {/* Logo */}
      <div onClick={() => navigate("/")} className="absolute top-8 left-8 cursor-pointer z-20">
        <div className="flex items-center">
          <FileText className="h-9 w-9 text-indigo-600" />
          <span className="ml-2 text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            DocConvert
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center px-2 py-20">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Auth Card */}
          <div className="relative z-10" style={{ animation: "fadeInUp 0.8s ease-out" }}>
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 border border-white/20">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  {isLogin ? "Welcome back" : "Join us today"}
                </h2>
                <p className="text-gray-600">
                  {isLogin ? "Continue your journey" : "Start converting documents effortlessly"}
                </p>
              </div>

              {/* OAuth Buttons - Icon Only, Horizontal */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <button
                  onClick={() => handleOAuth("google")}
                  className="group p-4 bg-white border-2 border-gray-200 rounded-2xl hover:border-indigo-400 hover:shadow-lg transition-all transform hover:scale-110"
                  title="Continue with Google"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => handleOAuth("github")}
                  className="group p-4 bg-white border-2 border-gray-200 rounded-2xl hover:border-indigo-400 hover:shadow-lg transition-all transform hover:scale-110"
                  title="Continue with GitHub"
                >
                  <Github className="h-6 w-6 text-gray-700 group-hover:text-indigo-600 transition-colors" />
                </button>
                <button
                  onClick={() => handleOAuth("twitter")}
                  className="group p-4 bg-white border-2 border-gray-200 rounded-2xl hover:border-indigo-400 hover:shadow-lg transition-all transform hover:scale-110"
                  title="Continue with Twitter"
                >
                  <svg
                    className="h-6 w-6 text-gray-700 group-hover:text-indigo-600 transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
              </div>

              {/* Divider */}
              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">or continue with email</span>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-5">
                {isLogin ? (
                  // Login Form
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="ml-2 text-gray-700">Remember me</span>
                      </label>
                      <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold">
                        Forgot password?
                      </a>
                    </div>
                  </>
                ) : (
                  // Signup Form
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
                      <input
                        type="date"
                        value={formData.dob}
                        onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                  </>
                )}

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  {isLogin ? "Sign In" : "Create Account"}
                </button>
              </div>

              {/* Toggle Login/Signup */}
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  {isLogin ? "Don't have an account? " : "Already have an account? "}
                  <button
                    onClick={toggleMode}
                    className="text-indigo-600 hover:text-indigo-700 font-bold transition-colors"
                  >
                    {isLogin ? "Sign up" : "Sign in"}
                  </button>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Creative Illustration */}
          <div className="hidden lg:block relative" style={{ animation: "slideIn 0.8s ease-out" }}>
            <div className="relative">
              {/* Main Illustration Area */}
              <div className="relative h-96 mb-8 flex items-center justify-center">
                {/* Central Floating Document Stack */}
                <div className="relative" style={{ animation: "gentleFloat 4s ease-in-out infinite" }}>
                  {/* Document Cards Stack */}
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 w-48 h-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
                      style={{
                        transform: `translate(-50%, -50%) rotate(${i * 8 - 12}deg) translateY(${i * 10}px)`,
                        zIndex: 4 - i,
                      }}
                    >
                      <div className="h-4 bg-linear-to-r from-indigo-400 to-purple-400 rounded-lg mb-3" />
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded" />
                        <div className="h-2 bg-gray-200 rounded" />
                        <div className="h-2 bg-gray-200 rounded w-4/5" />
                        <div className="h-2 bg-gray-200 rounded w-3/5" />
                      </div>

                      {/* Document Icons */}
                      <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                          <FileText className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-pink-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Decorative Circles */}
                <div
                  className="absolute top-10 right-10 w-20 h-20 rounded-full bg-linear-to-br from-indigo-400 to-purple-400 opacity-20 blur-xl"
                  style={{ animation: "gentleFloat 3s ease-in-out infinite" }}
                />
                <div
                  className="absolute bottom-10 left-10 w-16 h-16 rounded-full bg-linear-to-br from-pink-400 to-purple-400 opacity-20 blur-xl"
                  style={{ animation: "gentleFloat 3.5s ease-in-out infinite 0.5s" }}
                />
              </div>

              {/* Feature Cards */}
              <div className="space-y-4 ">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-white/50 shadow-md hover:shadow-lg transition-all">
                  <div className="flex  items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-100 to-purple-200 flex items-center justify-center shrink-0">
                      <svg
                        className="w-6 h-6 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="font-bold text-gray-900">Secure & Private</h3>

                      <p className="text-sm text-gray-600">
                        Your files are encrypted and never stored on our servers
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-white/50 shadow-md hover:shadow-lg transition-all">
                  <div className="flex  items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-pink-100 to-pink-200 flex items-center justify-center shrink-0">
                      <svg
                        className="w-6 h-6 text-pink-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">Multiple Formats</h3>
                      <p className="text-sm text-gray-600">
                        Support for PDF, DOCX, images, and 20+ file types
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
