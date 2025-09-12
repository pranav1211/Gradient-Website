"use client";

import { motion } from "framer-motion";
import { Zap, Rocket, Star } from "lucide-react";
import Navbar from '../../components/Navbar'
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-center text-white bg-gradient-to-r from-purple-900 via-indigo-800 to-blue-800">
      {/* Navbar */}
      <Navbar />

      {/* Pulsating blobs */}
      <div className="absolute top-1/5 left-1/6 w-72 h-72 bg-amber-400/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/3 right-1/5 w-64 h-64 bg-pink-400/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-violet-400/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/6 w-60 h-60 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-amber-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-[15%] right-[10%] w-52 h-52 bg-orange-400/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[15%] left-[10%] w-64 h-64 bg-green-400/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[40%] left-[45%] w-72 h-72 bg-pink-300/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-[40%] right-[45%] w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl animate-pulse" />

      {/* Main content */}
      <motion.div
        className="relative flex flex-col items-center justify-center h-screen px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
      >
        <div className="flex items-center space-x-6 mb-8">
          <Zap size={50} className="text-amber-300 animate-pulse" />
          <Rocket size={50} className="text-amber-300 animate-bounce" />
          <Star size={50} className="text-amber-300 animate-spin-slow" />
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold drop-shadow-lg">
          <span className="text-amber-300">Gradient&nbsp;X</span>{" "}
          PhaseShift&nbsp;Meridian
        </h1>

        <p className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-200 tracking-wide">
          Coming&nbsp;Soon
        </p>
      </motion.div>
    </div>
  );
}