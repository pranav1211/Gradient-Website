'use client'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Calendar, Sparkles, ArrowUpRight, Compass, Trophy, Play } from 'lucide-react'
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
          <div className="container mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center justify-center w-full space-y-4 lg:space-y-0">
              {/* Centered content */}
              <div className="flex items-center justify-center space-x-3 sm:space-x-4 text-center">
                <Sparkles size={24} className="text-green-200 animate-pulse hidden lg:block" />
                <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-3">
                  <h2 className="font-bold text-2xl sm:text-3xl lg:text-3xl text-white">
                    <span className="text-green-200">GRADIENT X UTSAV 2025</span>
                  </h2>
                  <p className="text-xl sm:text-2xl lg:text-2xl text-white font-semibold">
                    Has Concluded
                  </p>
                  <span className="text-lg lg:text-xl text-green-100 font-medium mx-2 hidden sm:inline">-</span>
                  <p className="text-lg lg:text-xl text-green-100 font-medium">
                    Check out the recap!
                  </p>
                </div>
                <Sparkles size={24} className="text-green-200 animate-pulse hidden lg:block" />
                <Link
                  href="/events"
                  className="group inline-flex items-center space-x-2 px-5 py-2 bg-green-200 hover:bg-green-100 rounded-lg transition-all duration-300 transform hover:scale-105 text-emerald-900 font-bold text-base lg:text-lg shadow-lg ml-4"
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
                <div className="absolute inset-0 bg-gradient-to-t from-purple-920/20 via-transparent to-purple-950/10" />

                {/* Caption attached directly to the image */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-center bg-gradient-to-t from-purple-950/90 to-purple-950/0">
                  <h3 className="text-xl md:text-2xl font-bold text-white">The Gradient Team</h3>
                  <p className="text-purple-200/90 font-medium text-lg mt-1">Redefining Intelligence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Uncharted Lost Voyage Game Section */}
        <motion.section
          className="relative w-full py-16 md:py-20 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Content Container */}
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                {/* Left Side - Game Image */}
                <motion.div
                  className="w-full lg:w-1/2"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-1">
                      <Image
                        src="https://gradient-content-server.vercel.app/content/utsav25/gallery/unc/ulvfs.png"
                        alt="Uncharted Lost Voyage Game"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Right Side - Game Info & CTA */}
                <motion.div
                  className="w-full lg:w-1/2 text-center lg:text-left"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  {/* Description */}
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 space-y-4">                                        
                    Dive into <span className="text-yellow-300 font-medium">Gradient's immersive game</span>, where interconnected websites hide cryptic clues and thrilling puzzles.
                    <br /><br />
                    Solve challenges, uncover secrets, and piece together the ultimate mystery.
                    <br />
                    <span className="text-blue-300 font-semibold block mt-4">Are you ready to discover the lost treasures?</span>
                  </p>


                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                    <Link
                      href="/uncharted-lost-voyage"
                      className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                      <Play size={20} className="mr-2" />
                      <span className="relative text-lg">Start Your Quest</span>
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>

                    <Link
                      href="/game-info"
                      className="group inline-flex items-center justify-center px-8 py-4 border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white rounded-full transition-all duration-300 transform hover:scale-105 font-semibold text-lg w-full sm:w-auto"
                    >
                      <span>Learn More</span>
                      <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  )
}