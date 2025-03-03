'use client'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'

import TypingAnimation from '@/components/ui/typing-animation'
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="relative min-h-screen bg-[#1a1a1a] text-white overflow-hidden">
      <Navbar />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center min-h-[calc(100vh-80px)] pt-20">
          {/* Left Section */}
          <motion.div
            className="md:w-1/2 space-y-8 relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-10 text-center md:text-left">
                Welcome to
                <div className="mt-2">
                  <TypingAnimation className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 ">
                    Gradient
                  </TypingAnimation>
                </div>
              </h1>
            </div>

            <p className="text-gray-300 text-xl md:text-2xl max-w-lg leading-relaxed text-center md:text-left">
              Pioneering the future through AI and Machine Learning innovation at B.M.S. College of Engineering.
            </p>

            <motion.div
              className="flex flex-col md:flex-row items-center space-x-8 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/about"
                className="group flex items-center justify-center md:justify-start space-x-3 px-8 py-4 bg-purple-600 rounded-full hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 text-lg font-medium"
              >
                <span>Discover Our Club</span>
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              {/* Uncomment if needed */}
              {/* <motion.div
    className="hidden md:flex items-center space-x-3"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6 }}
  >
    <div className="w-12 h-[2px] bg-purple-600" />
    <div className="flex space-x-1">
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className={`w-2 h-2 ${i === 3 ? 'bg-purple-600' : 'bg-purple-800'} rounded-sm`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 * i }}
        />
      ))}
    </div>
  </motion.div> */}
            </motion.div>

          </motion.div>

          {/* Right Section */}
          <motion.div
            className="md:w-1/2 mt-12 md:mt-0 relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div
                className="absolute -right-4 -top-4 w-24 h-24 border-4 border-purple-600/30 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              />
              <motion.div
                className="absolute -left-4 -bottom-4 w-16 h-16 border-4 border-purple-600/30 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 }}
              />
              <div className="relative">
                <div className="absolute -right-2 -top-2 w-full h-full border-2 border-purple-600 rounded-lg" />
                <div className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                  <div className="absolute top-2 left-2 flex space-x-1 items-center"></div>
                  <Image
                    src="/group.png"
                    alt="Group photo"
                    width={500}
                    height={400}
                    className="w-full max-w-screen-sm sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl h-auto object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>


            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Media Links */}
      <motion.div
        className="fixed bottom-6 right-6 flex space-x-4 bg-[#1a1a1a]/80 backdrop-blur-sm p-4 rounded-lg shadow-lg"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.8 }}
      >
        {[
          { Icon: FaInstagram, href: "https://www.instagram.com/gradient.aiml/" },
          { Icon: FaLinkedin, href: "https://www.linkedin.com/company/gradient-club/" }
        ].map(({ Icon, href }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            className="text-gray-400 hover:text-purple-400 transform hover:scale-110 transition-all duration-300"
          >
            <Icon size={24} />
          </Link>
        ))}
      </motion.div>
    </main>
  )
}