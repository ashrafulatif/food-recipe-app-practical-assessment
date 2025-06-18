"use client";
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto text-center">
        {/* Footer Content */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-yellow-900">
            Tailus Feedus: A Food Recipe App
          </h2>
          <p className="text-sm mt-2">
            Discover and share your favorite recipes with the community.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500"
          >
            <Instagram className="h-6 w-6" />
          </a>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center space-x-6 text-sm mb-6">
          <a href="/about" className="hover:text-yellow-500">
            About Us
          </a>
          <a href="/contact" className="hover:text-yellow-500">
            Contact
          </a>
          <a href="/privacy" className="hover:text-yellow-500">
            Privacy Policy
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs">
          © {new Date().getFullYear()} Food Recipe App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
