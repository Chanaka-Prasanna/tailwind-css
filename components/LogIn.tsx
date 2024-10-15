"use client";
import React, { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., API call)
    console.log("Email:", email, "Password:", password);
  };
  return (
    <div className="flex items-center justify-center min-h-screen max-sm:px-4">
      <div className="w-full max-w-md mx-auto border border-white border-1 px-4 sm:px-8 py-10 sm:py-20 rounded-2xl">
        <h1 className="text-3xl text-bold mb-2">
          Welcome to ABC <span className="text-lg">👋</span>
        </h1>
        <p className="mb-5 text-md">
          Please Login to your account and start your journey
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
            <label className="text-gray-400 text-sm">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-sm text-gray-600 h-[40px] px-5 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="flex flex-col space-y-2 mt-5">
            <label htmlFor="password" className="text-gray-400 text-sm">
              Password
            </label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="xxxxxxxxxxxxxxxxxxx"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-sm text-gray-600 h-[40px] pl-5 pr-12 rounded-md bg-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-gray-500"
                >
                  {showPassword ? (
                    <>
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </>
                  ) : (
                    <>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="flex space-x-2 mt-5">
            <input
              type="checkbox"
              id="rememberMe"
              className="w-4 h-4 accent-pink-500 focus:ring-pink-500 focus:ring-offset-0"
            />
            <label
              htmlFor="rememberMe"
              className="text-sm font-medium text-gray-400"
            >
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="bg-pink-500 w-full h-[35px] rounded-md mt-5 text-white font-medium hover:bg-pink-600 transition-colors"
          >
            Sign In
          </button>
          <div className="flex justify-between">
            <p className="text-sm mt-2 max-sm:text-[12px]">
              New to ABC?{" "}
              <a
                href="/"
                className="text-pink-500 hover:underline max-sm:text-[11px]"
              >
                Create new account
              </a>
            </p>
            <p className="text-sm mt-2 max-sm:text-[11px]">
              <a
                href="/forgot-password"
                className="text-pink-500 hover:underline"
              >
                Forgot Password?
              </a>
            </p>
          </div>

          <div className="flex justify-center mt-5">
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-500 ">Or </span>
            </div>
          </div>

          <div className="mt-6 space-x-4 flex justify-center">
            <a href="/">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </a>
            <a href="/">
              {" "}
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"
                  fill="#ffffff"
                />
              </svg>
            </a>
            <a href="/">
              {" "}
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"
                  fill="#ffffff"
                />
              </svg>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
