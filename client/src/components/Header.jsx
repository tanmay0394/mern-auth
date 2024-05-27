import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/britwise_logo.jpg";

export const Header = () => {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/* Logo */}
        <div className="flex items-start">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        {/* Title */}
        <Link to="/">
          <h1 className="font-bold flex items-start">Authorization</h1>
        </Link>
        {/* Navigation */}
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="signin">Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
