'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Terminal, Users, Code, BookOpen, Lightbulb, Share2, Calendar, Award, ChevronDown } from 'lucide-react'
import Footer from '@/components/Footer'
import Head from 'next/head'


export default function About() {
  const activities = [
    {
      icon: Terminal,
      title: "Technical Workshops",
      description: "Hands-on workshops and seminars on cutting-edge AI and ML technologies"
    },
    {
      icon: Code,
      title: "Hackathons",
      description: "Competitive coding events and AI project challenges"
    },
    {
      icon: Users,
      title: "Technical Events",
      description: "Collaborative, fun and innovative events with real-world applications"
    },
    {
      icon: BookOpen,
      title: "Guest Lectures",
      description: "Industry experts sharing insights and experiences"
    },
    {
      icon: Lightbulb,
      title: "Placement Talks",
      description: "Educating students on the ever-changing landscape of placements and helping them succeed"
    },
    {
      icon: Share2,
      title: "Networking",
      description: "Building connections within the AI community"
    }
  ]

  return (

    <>
    <Head>
      <title>About Gradient AIML</title>
      <meta name="description" content="Learn more about Gradient AIML, the AI and Machine Learning club at BMSCE, driving innovation and research." />
      <meta name="keywords" content="About Gradient AIML, AI Club BMSCE, Machine Learning, AI, Gradient AIML" />
      <meta property="og:title" content="About Gradient AIML" />
      <meta property="og:description" content="Explore who we are, our mission, and the work we do in AI and Machine Learning at BMSCE." />
      <meta property="og:image" content="https://gradient-content-server.vercel.app/content/Logo.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>

    <div className="min-h-screen text-white" style={{ backgroundColor: '#180336' }}>
      {/* Google Fonts Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Bree+Serif&display=swap');

        .righteous-regular {
          font-family: 'Righteous', sans-serif;
          font-weight: 400;
          font-style: normal;
        }

        .bree-serif-regular {
          font-family: 'Bree Serif', serif;
          font-weight: 400;
          font-style: normal;
        }
      `}</style>
      {/* Background pattern */}
      <div className="fixed inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right,rgb(127, 111, 168) 1px, transparent 1px), linear-gradient(to bottom, rgb(127, 111, 168) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundColor: '#180336',
        }} />

      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:pt-24 pb-16 md:pb-20">

        <div className="mb-4 md:mb-10 relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-8 md:mb-10"
          >
            {/* Updated responsive title */}
            <h1 className="text-7xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-6 md:mt-10 bree-serif-regular">
              <span className="text-white">About</span> <br className="sm:hidden" />
              <span className="sm:ml-4" style={{ color: '#C4B5FD' }}>Gradient</span>
            </h1>            
          </motion.div>
        </div>

        <div className="space-y-24">
          {/* Who Are We Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative bg-purple-950/90 overflow-hidden shadow-lg p-8 md:p-10"
              style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>

              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-transparent -skew-x-12" />

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-1 bg-purple-500" />
                  <h2 className="text-3xl md:text-4xl righteous-regular px-6 text-center text-white">
                    Who Are We?
                  </h2>
                  <div className="w-16 h-1 bg-purple-500" />
                </div>

                <p className="text-purple-100 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
                  <span style={{ whiteSpace: 'pre-line' }}>
                    {`Gradient is a vibrant student community that embraces the dynamic field of AI and ML.

    We focus on fostering innovation, collaboration and knowledge sharing among aspiring machine learning enthusiasts.

    Our mission is to create a platform where passion for technology thrives, and groundbreaking ideas flourish.`}
                  </span>
                </p>
              </div>
            </div>
          </motion.section>

          {/* Our Achievements Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative bg-purple-950/90 overflow-hidden shadow-lg p-8 md:p-10"
              style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>

              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-900/20 to-transparent skew-x-12" />

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-1 bg-purple-500" />
                  <h2 className="text-3xl md:text-4xl righteous-regular px-6 text-center text-white">
                    Our Achievements
                  </h2>
                  <div className="w-16 h-1 bg-purple-500" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-purple-100 mb-12">
                  <div className="group transform hover:scale-105 transition-transform duration-300">
                    <Award className="text-purple-400 mx-auto mb-3 group-hover:text-purple-300 transition-colors" size={40} />
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-white transition-colors">45+</h3>
                    <p className="text-lg">Events Conducted</p>
                  </div>
                  <div className="group transform hover:scale-105 transition-transform duration-300">
                    <Users className="text-purple-400 mx-auto mb-3 group-hover:text-purple-300 transition-colors" size={40} />
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-white transition-colors">2500+</h3>
                    <p className="text-lg">Participants</p>
                  </div>
                  <div className="group transform hover:scale-105 transition-transform duration-300">
                    <Code className="text-purple-400 mx-auto mb-3 group-hover:text-purple-300 transition-colors" size={40} />
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-white transition-colors">200+</h3>
                    <p className="text-lg">Community Members</p>
                  </div>
                  <div className="group transform hover:scale-105 transition-transform duration-300">
                    <Award className="text-purple-400 mx-auto mb-3 group-hover:text-purple-300 transition-colors" size={40} />
                    <h3 className="text-2xl md:text-3xl font-bold group-hover:text-white transition-colors">₹4L+</h3>
                    <p className="text-lg">Sponsorship Raised</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="group relative overflow-hidden rounded-lg shadow-lg">
                    <div className="h-64 w-full overflow-hidden">
                      <img
                        src="https://gradient-content-server.vercel.app/content/merchbackshot.png"
                        alt="Our Very Own Merchandise"
                        className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/0 to-transparent" />
                    <div className="absolute bottom-4 left-4">

                      <p className="text-white text-lg font-medium">Our Very Own Merchandise</p>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-lg shadow-lg">
                    <div className="h-64 w-full overflow-hidden">
                      <img
                        src="https://gradient-content-server.vercel.app/content/gw1.jpg"
                        alt="The First Ever Gradient Week"
                        className="w-full h-full object-cover transition-transform duration-700 scale-100    group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/0 to-transparent" />
                    <div className="absolute bottom-4 left-4">

                      <p className="text-white text-lg font-medium">The First Ever Gradient Week</p>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden rounded-lg shadow-lg">
                    {/* <div className="h-64 w-full overflow-hidden">
                      <img
                        src="https://gradient-content-server.vercel.app/content/posters/hacka24.webp"
                        alt="Our Biggest Hackathon"
                        className="w-full h-full object-fit transition-transform duration-700 scale-105 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/50 via-purple-950/10 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      
                      <p className="text-white text-lg font-medium">Our Biggest Hackathon</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Our Roots Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative bg-purple-950/90 overflow-hidden shadow-lg p-8 md:p-10"
              style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>

              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-purple-900/20 to-transparent -skew-x-12" />

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-1 bg-purple-500" />
                  <h2 className="text-3xl md:text-4xl righteous-regular px-6 text-center text-white">
                    Our Roots
                  </h2>
                  <div className="w-16 h-1 bg-purple-500" />
                </div>

                <p className="text-purple-100 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-12">
                  Gradient was founded in 2022, with the aim of reaching new heights and boldly doing what no one has done before.
                </p>

                <div className="grid md:grid-cols-2 gap-8 justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="group relative overflow-hidden rounded-lg shadow-lg"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}
                  >
                    <div className="h-64 sm:h-72 w-full overflow-hidden">
                      <img
                        src="https://gradient-content-server.vercel.app/content/inaugration.png"
                        alt="Inauguration Ceremony 1"
                        className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/0 to-transparent" />
                    <div className="absolute bottom-4 left-0 w-full text-center">

                      <p className="text-white text-lg font-medium">Inauguration ceremony of Gradient (2022)</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="group relative overflow-hidden rounded-lg shadow-lg"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}
                  >
                    <div className="h-64 sm:h-72 w-full overflow-hidden">
                      <img
                        src="https://gradient-content-server.vercel.app/content/founding core.jpg"
                        alt="23 core"
                        className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/0 to-transparent" />
                    <div className="absolute bottom-4 left-0 w-full text-center">

                      <p className="text-white text-lg font-medium">'23 Core, The First Core</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 }}
                    className="group relative overflow-hidden rounded-lg shadow-lg md:col-span-2 mx-auto max-w-2xl"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}
                  >
                    <div className="h-64 sm:h-72 w-full overflow-hidden">
                      <img
                        src="https://gradient-content-server.vercel.app/content/core24.jpg"
                        alt="24 core"
                        className="w-full h-full object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/0 to-transparent" />
                    <div className="absolute bottom-4 left-0 w-full text-center">

                      <p className="text-white text-lg font-medium">The 2024 Core Team</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* What We Do Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative bg-purple-950/90 overflow-hidden shadow-lg p-8 md:p-10"
              style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>

              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-900/20 to-transparent skew-x-12" />

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-10">
                  <div className="w-16 h-1 bg-purple-500" />
                  <h2 className="text-3xl md:text-4xl righteous-regular px-6 text-center text-white">
                    What We Do
                  </h2>
                  <div className="w-16 h-1 bg-purple-500" />
                </div>

                <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                  {activities.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group relative"
                    >
                      <div className="flex flex-col h-full p-6 rounded-xl bg-purple-900/40 shadow-md border border-purple-500/20 group-hover:bg-purple-800/40 group-hover:shadow-lg transition-all duration-300"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>
                        <div className="flex flex-col items-center text-center">
                          {/* Icon */}
                          <activity.icon
                            className="text-purple-400 group-hover:text-purple-300 transition-colors mb-4"
                            size={48}
                          />
                          {/* Title */}
                          <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
                          {/* Purple accent line */}
                          <div className="w-12 h-1 bg-purple-500 mb-4 transform origin-center transition-all duration-300 group-hover:w-16 group-hover:bg-fuchsia-500" />
                          {/* Description */}
                          <p className="text-purple-100 text-base">{activity.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>


    </div>
    </>

  )
}