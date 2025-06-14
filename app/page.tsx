'use client'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Calendar, Sparkles, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'


export default function Home() {   
  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    setIsVisible(true)
  }, [])
  return (
    <>
      <Head>
        <title>Gradient | Home</title>
        <meta name="description" content="Welcome to Gradient AIML - Pioneering AI and ML innovation at BMS College of Engineering." />
        <meta name="keywords" content="Gradient AIML, AI, ML, Machine Learning, BMS College of Engineering, Artificial Intelligence" />
        <meta property="og:title" content="Gradient AIML | Home" />
        <meta property="og:description" content="Join us in pioneering AI and ML research and applications at BMSCE." />
        <meta property="og:image" content="https://gradient-content-server.vercel.app/content/Logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

    <div className="min-h-screen text-white" style={{ backgroundColor: '#180336' }}>
      {/* Google Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Righteous&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap');

      .bree-serif-regular {
      font-family: "Bree Serif", serif;
        font-weight: 400;
        font-style: normal;
          }
        .righteous-regular {
          font-family: "Righteous", sans-serif;
          font-weight: 400;                      
        }
      `}</style>

      {/* Background pattern */}
      <div className="fixed inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right,rgb(127, 111, 168) 1px, transparent 1px), linear-gradient(to bottom, rgb(127, 111, 168) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundColor: '#180336'
        }} />

      <Navbar />

      {/* Gradient X Utsav Banner */}
      <motion.div
        className="relative w-full bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 py-4 mt-20 sm:mt-20 md:mt-24 mb-8 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center w-full space-y-4 md:space-y-0 md:space-x-8">
            {/* Left side (title and date) */}
            <div className="flex items-center space-x-3 sm:space-x-4 w-full md:w-auto text-center">
              <Sparkles size={24} className="text-green-200 animate-pulse hidden md:block" />
              <div>
                <h2 className="font-bold text-3xl md:text-4xl text-white">
                  <span className="text-green-200">GRADIENT X UTSAV</span>
                </h2>
              </div>
              <p className="text-2xl md:text-3xl text-white font-semibold">
                Has Concluded
              </p>
              <Sparkles size={24} className="text-green-200 animate-pulse hidden md:block" />
            </div>

            {/* Right side (tagline on the left and Explore Now button on the right) */}
            <div className="flex flex-col md:flex-row items-center justify-center space-x-4 w-full md:w-auto text-center">
              <p className="text-green-100 text-lg md:text-xl font-medium">
                Check out the recap!
              </p>
              <Link
                href="/events"
                className="group inline-flex items-center space-x-2 px-6 py-2 bg-green-200 hover:bg-green-100 rounded-lg transition-all duration-300 transform hover:scale-105 text-emerald-900 font-bold text-lg shadow-lg"
              >
                <span>Explore Now</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>



      {/* Main content container with improved padding */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Hero section with better height and spacing */}
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[65vh] gap-8 lg:gap-12">

          {/* Left Section (Text) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-5/12 space-y-6 z-10 text-center lg:text-left"
          >
            {/* Title with balanced font sizes */}
            <div className="space-y-2">
              <h1 className="bree-serif-regular leading-tight">
                <span className="text-white text-5xl sm:text-6xl md:text-7xl ">Welcome to</span> <br />
                <span style={{ color: '#C4B5FD' }} className="text-6xl sm:text-7xl md:text-8xl ">Gradient</span>
              </h1>
            </div>

            {/* Paragraph */}
            <p className="text-purple-200 text-xl md:text-2xl font-light leading-relaxed mt-3">
              Pioneering the future through AI and Machine Learning innovation at B.M.S. College of Engineering.
            </p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 justify-center lg:justify-start mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/about"
                className="group flex items-center justify-center space-x-3 px-8 py-4 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 text-lg font-medium w-full sm:w-auto"
              >
                <span>Explore Our Club</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/gallery"
                className="group flex items-center justify-center space-x-3 px-8 py-4 bg-purple-800/60 hover:bg-purple-600 rounded-full transition-all duration-300 transform hover:scale-105 text-lg font-medium w-full sm:w-auto"
              >
                <span>View Events</span>
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Section (Image and Caption) - Made larger */}
          <motion.div
            className="w-full lg:w-7/12 mt-10 lg:mt-0 z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            {/* Image Container - Increased size */}
            <div className="relative w-full overflow-hidden rounded-xl shadow-2xl group">
              {/* Image */}
              <div className="aspect-w-16 aspect-h-10">
                <Image
                  src="https://gradient-content-server.vercel.app/content/group.png"
                  alt="Group photo"
                  width={1600}
                  height={1000}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/70 via-transparent to-purple-950/10" />

              {/* Caption attached directly to the image */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-center bg-gradient-to-t from-purple-950/90 to-purple-950/0">
                <h3 className="text-xl md:text-2xl font-bold text-white">The Gradient Team</h3>
                <p className="text-purple-200/90 font-medium text-lg mt-1">Redefining Intelligence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  )
}