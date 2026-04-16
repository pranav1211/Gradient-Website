'use client'
import { useState } from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react';
import { motion } from 'framer-motion'
import {
  Trophy,
  Users,
  Building2,
  Microscope,
  Microchip,
  Server,
  Cpu,
  Database,
  HardDrive,
  Monitor,
  Network,
  LineChart,
  Code,
  AtSign,
  BookOpen,
  Award,
  Brain
} from 'lucide-react';
import { ImGit } from 'react-icons/im';
import Image from 'next/image'
import Head from 'next/head'


const stats = [
  { label: 'Research Papers', value: '10+', icon: Microscope },
  { label: 'Faculty Members', value: '25+', icon: Users },
  { label: 'Students Placed', value: '200+', icon: Building2 },
  { label: 'Student Achievements', value: '100+', icon: Trophy }
]

const researchAreas = [
  {
    title: 'Machine Learning',
    description: 'Deep learning, reinforcement learning, and neural networks research with state-of-the-art facilities.',
    icon: Brain,
    projects: ['Neural Architecture Search', 'Automated Machine Learning', 'Deep Reinforcement Learning']
  },
  {
    title: 'Computer Vision',
    description: 'Advanced image processing and visual recognition systems development using cutting-edge algorithms.',
    icon: Network,
    projects: ['Object Detection', 'Image Segmentation', 'Visual SLAM']
  },
  {
    title: 'Natural Language Processing',
    description: 'Research in text analysis, language understanding, and generation using transformer models.',
    icon: LineChart,
    projects: ['Sentiment Analysis', 'Machine Translation', 'Text Generation']
  }
]

const facilities = [
  {
    name: 'Classrooms',
    description: 'State-of-the-art clasrooms with advanced technology to enhance the student learning experience.',
    image: 'https://gradient-content-server.vercel.app/content/department/coe.jpeg'
  },
  {
    name: 'Computer Labs',
    description: 'High-performance computing clusters with the high end NVIDIA GPUs.',
    image: 'https://gradient-content-server.vercel.app/content/department/lab.webp'
  },
  {
    name: 'Seminar Hall',
    description: 'A spacious seminar hall designed for engaging lectures and discussions, featuring modern seating, clear acoustics, and a professional ambiance.',
    image: 'https://gradient-content-server.vercel.app/content/department/semh.jpeg'
  }
]

const centerOfExcellence = {
  infrastructure: [
    {
      icon: Server,
      title: 'Nvidia DGX A100 Server',
      description: 'State-of-the-art supercomputing server with 320GB GPU memory, 2 AMD 128-core CPUs, 1TB RAM, and NVSwitch with 600 GB/s GPU-GPU Bandwidth for large-scale AI computation.'
    },
    {
      icon: Microchip,
      title: 'HP ELITE 800 G9',
      description: 'Windows 11 Pro, Intel Core i7-12700, 32GB memory for high-performance computing tasks.'
    },
    {
      icon: Cpu,
      title: 'HP ELITE 600 G9',
      description: 'Intel Core i7-10700 CPU @ 2.90 GHz, 16GB RAM for AI model development and testing.'
    },
    {
      icon: Cpu,
      title: 'HP PRODESK 400 G7',
      description: 'Intel Core i7-10700 CPU @ 2.90 GHz, 16GB RAM supporting research projects and AI simulations.'
    },
    {
      icon: HardDrive,
      title: 'HP ELITE TOWER 600 G9',
      description: 'Intel Core i7-10700 CPU @ 2.90 GHz, 16GB RAM optimized for AI research workloads.'
    },
    {
      icon: Microchip,
      title: 'LENOVO P520 Workstation',
      description: 'Intel Xeon W-2295 CPU 18 Core, 128GB RAM, Lenovo Curved 1500R Monitor 27" FHD, Nvidia Graphics Card RTX A5000 for intensive AI and ML applications.'
    },
    {
      icon: Monitor,
      title: 'Sense Interactive Intelligent Panel 86"',
      description: 'Intel i5 Processor, 8500 CPU @ 3.00GHz, 8GB DDR4 RAM for interactive AI and ML learning sessions.'
    }],
  services: [
    'Access to cutting-edge AI technology and infrastructure',
    'Project-based collaboration and support',
    'AI model Development and Deployment services',
    'Performance Optimization and Scalability support',
    'Large-scale Data processing and Analysis'
  ]
}

export default function DepartmentWork() {
  return (

    <>
      <Head>
        <title>Department of Machine Learning | BMSCE</title>
        <meta name="description" content="Learn about the Department of Machine Learning at BMS College of Engineering. Explore our research, faculty, and projects." />
        <meta name="keywords" content="Department of Machine Learning, BMSCE, Machine Learning, AI, Artificial Intelligence, BMS College of Engineering" />
        <meta property="og:title" content="Department of Machine Learning | BMSCE" />
        <meta property="og:description" content="Discover the Department of Machine Learning at BMS College of Engineering, leading AI research and innovation." />
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-16 md:pb-20">
          <div className="mb-4 md:mb-10 relative">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-8 md:mb-10"
            >
              {/* Modified title for better responsiveness */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mt-6 md:mt-10 bree-serif-regular">
                <span className="text-white">Department of</span> <br />
                <span style={{ color: '#C4B5FD' }}>Machine Learning</span>
              </h1>
              {/* Tagline */}
              <p className="text-purple-200 text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 md:mt-6 font-light px-2">
                Pioneering research and innovation in Artificial Intelligence and Machine Learning
              </p>
            </motion.div>
          </div>

          <div className="space-y-24">
            {/* Stats Section */}
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
                      Our Achievements
                    </h2>
                    <div className="w-16 h-1 bg-purple-500" />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-purple-100">
                    {stats.map((stat, index) => (
                      <div key={index} className="group transform hover:scale-105 transition-transform duration-300">
                        <stat.icon className="text-purple-400 mx-auto mb-3 group-hover:text-purple-300 transition-colors" size={40} />
                        <h3 className="text-2xl md:text-3xl font-bold group-hover:text-white transition-colors">{stat.value}</h3>
                        <p className="text-lg">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* PhaseShift 2025 Victory Section */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <div className="relative bg-purple-950/90 overflow-hidden shadow-lg p-8 md:p-10"
                style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>

                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-transparent -skew-x-12" />

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-1 bg-purple-500" />
                    <h2 className="text-3xl md:text-4xl righteous-regular px-6 text-center text-white">
                      PhaseShift 2025 Champions
                    </h2>
                    <div className="w-16 h-1 bg-purple-500" />
                  </div>

                  {/* Image on top - 16:9 aspect ratio */}
                  <motion.div
                    className="relative rounded-xl overflow-hidden w-full aspect-video shadow-lg mb-8 max-w-5xl mx-auto"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    style={{ clipPath: 'polygon(0 0, 100% 0, 99% 100%, 1% 100%)' }}
                  >
                    <Image
                      src="/mlps25.jpeg"
                      alt="PhaseShift 2025 Victory"
                      loading="lazy"
                      className="object-cover"
                      fill
                    />                    
                  </motion.div>

                  {/* Content below */}
                  <div className="space-y-8 text-purple-100">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <Trophy className="text-yellow-400" size={56} />
                      <span className="text-4xl md:text-5xl font-bold text-yellow-400">1st Place</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white righteous-regular text-center">
                      Project Stalls Category Winner
                    </h3>

                    <div className="max-w-5xl mx-auto space-y-6">
                      <p className="text-xl md:text-2xl leading-relaxed text-center">
                        In a remarkable display of innovation and excellence, the <span className="text-purple-300 font-semibold">Department of Machine Learning</span> clinched <span className="text-yellow-400 font-bold">first place</span> in the Project Stalls category at <span className="text-purple-300 font-semibold">PhaseShift 2025</span>.
                      </p>

                      <p className="text-xl md:text-2xl leading-relaxed text-center">
                        What makes this victory even more impressive? <span className="text-purple-300 font-bold">We outperformed departments with years—even decades more experience than us.</span> As one of the newest departments at BMSCE, we proved that innovation, dedication, and cutting-edge expertise trump legacy every time.
                      </p>
                    </div>

                    {/* Acknowledgments */}
                    <div className="max-w-4xl mx-auto mt-12 text-center space-y-8">
                      <p className="text-xl md:text-2xl leading-relaxed text-purple-200">
                        We thank our faculty coordinators
                      </p>

                      <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                        <span className="text-2xl md:text-2xl font-bold text-gray-300">Dr. Monika Puttaramaiah</span>
                        <span className="text-2xl md:text-2xl font-bold text-gray-300">Soniya L</span>
                      </div>

                      <p className="text-xl md:text-2xl leading-relaxed text-purple-200 pt-6">
                        We also thank our dedicated students
                      </p>

                      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {['Pranav Veeraghanta', 'Likith Chowdary', 'Rishi', 'S Sanjana', 'Sowmi', 'Vikhyat', 'Abhinav'].map((name, index) => (
                          <span key={index} className="text-lg md:text-xl font-semibold text-yellow-400">{name}</span>
                        ))}
                      </div>
                    </div>

                    {/* Final tagline */}
                    <div className="flex items-center justify-center gap-3 text-purple-300 text-xl md:text-2xl italic font-semibold mt-8">
                      <Award size={28} />
                      <span>This is just the beginning</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Research Areas Section */}
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
                      Research Areas
                    </h2>
                    <div className="w-16 h-1 bg-purple-500" />
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                    {researchAreas.map((area, index) => (
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
                            <area.icon
                              className="text-purple-400 group-hover:text-purple-300 transition-colors mb-4"
                              size={48}
                            />
                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                            {/* Purple accent line */}
                            <div className="w-12 h-1 bg-purple-500 mb-4 transform origin-center transition-all duration-300 group-hover:w-16 group-hover:bg-fuchsia-500" />
                            {/* Description */}
                            <p className="text-purple-100 text-base mb-4">{area.description}</p>

                            {/* Projects */}
                            <ul className="space-y-2 w-full">
                              {area.projects.map((project, idx) => (
                                <li key={idx} className="text-purple-200 text-sm flex items-center">
                                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                                  {project}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Center of Excellence Section */}
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
                      B.S. Narayan Center of Excellence
                    </h2>
                    <div className="w-16 h-1 bg-purple-500" />
                  </div>

                  <p className="text-purple-100 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-8">
                    A state-of-the-art facility fostering dynamic industry-academic synergy for AI adoption,
                    powered by cutting-edge infrastructure and expertise.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Infrastructure */}
                    <div className="bg-purple-900/40 rounded-xl p-8 shadow-md border border-purple-500/20 backdrop-blur-sm"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>
                      <h3 className="text-2xl font-semibold mb-6 text-purple-400 righteous-regular">Infrastructure</h3>
                      <div className="grid gap-6">
                        {centerOfExcellence.infrastructure.map((item, index) => (
                          <div key={index} className="flex items-start group">
                            <item.icon className="w-6 h-6 text-purple-400 mr-4 mt-1 group-hover:text-purple-300 transition-colors" />
                            <div>
                              <h4 className="font-semibold mb-1 group-hover:text-white transition-colors">{item.title}</h4>
                              <p className="text-purple-200 text-sm">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Services */}
                    <div className="bg-purple-900/40 rounded-xl p-8 shadow-md border border-purple-500/20 backdrop-blur-sm"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>
                      <h3 className="text-2xl font-semibold mb-6 text-purple-400 righteous-regular">Services Offered</h3>
                      <ul className="space-y-4">
                        {centerOfExcellence.services.map((service, index) => (
                          <li key={index} className="flex items-start group">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 group-hover:bg-purple-300 transition-colors" />
                            <span className="text-purple-200 group-hover:text-white transition-colors">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Center Image */}
                  <motion.div
                    className="relative rounded-xl overflow-hidden h-[400px] shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}
                  >
                    <Image
                      src="https://gradient-content-server.vercel.app/content/department/class.jpeg"
                      alt="B.S. Narayan Center of Excellence"
                      loading="lazy"
                      className="object-cover"
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-purple-950/20 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <p className="text-lg text-purple-100">
                          Experience the future of AI research and development at our cutting-edge facility
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Modified Facilities Section - Caption and title below image */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="relative bg-purple-950/90 overflow-hidden shadow-lg p-8 md:p-10"
                style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}>

                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-900/20 to-transparent skew-x-12" />

                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-8">
                    <div className="w-16 h-1 bg-purple-500" />
                    <h2 className="text-3xl md:text-4xl righteous-regular px-6 text-center text-white">
                      Our Facilities
                    </h2>
                    <div className="w-16 h-1 bg-purple-500" />
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {facilities.map((facility, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative rounded-xl shadow-lg bg-purple-900/40 border border-purple-500/20"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 97% 100%, 3% 100%)' }}
                      >
                        {/* Image container */}
                        <div className="overflow-hidden">
                          <Image
                            src={facility.image}
                            alt={facility.name}
                            width={400}
                            height={300}
                            className="w-full h-64 object-cover transition-transform duration-700 scale-100 group-hover:scale-110"
                          />
                        </div>

                        {/* Content below image */}
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2 text-white transition-colors">{facility.name}</h3>
                          <p className="text-purple-100 text-sm">{facility.description}</p>
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